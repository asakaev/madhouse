/**
 * \file
 *
 * \brief Empty user application template
 *
 */

/**
 * \mainpage User Application template doxygen documentation
 *
 * \par Empty user application template
 *
 * Bare minimum empty user application template
 *
 * \par Content
 *
 * -# Include the ASF header files (through asf.h)
 * -# Minimal main function that starts with a call to board_init()
 * -# "Insert application code here" comment
 *
 */

/*
 * Include header files for all drivers that have been imported from
 * Atmel Software Framework (ASF).
 */
#define F_CPU 8000000UL  // 8 MHz

#include <asf.h>
#include <util/delay.h>
#include "bwl_uart_lib.h"
#include "packet.h"
#include "protocol.h"

#define ROZETKA_ADDR 0xAA000001



void relay_ops(uint8_t devnum, uint8_t command)
{
		if (devnum == 1) //первое реле = 64
		{
			if (command== 0)
			{
				PORTD &= !64;
			}
			if (command== 1)
			{
				PORTD |= 64;
			}
			if (command== 2)
			{
				PORTD ^= 64;
			}
		}
		if (devnum == 2) // второе реле = 128
		{
			if (command== 0)
			{
				PORTD &= !128;
			}
			if (command== 1)
			{
				PORTD |= 128;
			}
			if (command== 2)
			{
				PORTD ^= 128;
			}
		}
}

void process(struct packet * in, struct packet * out)
{
		in->data.command = 200;
		in->data.devnum = 1;
		in->data.value = 1;
		in->type=165;

	int state = 0;
	if (in->dest.s_l == ROZETKA_ADDR)
	{
		if (in->type == 165) // команда устройству
		{
				relay_ops(in->data.devnum,in->data.value);
		}
		if (in->type == 51)
		{
			if (in->data.devnum == 1) //первое реле = 64
			{
				state = PORTD & (1>>6);
			}
			if (in->data.devnum == 2) // второе реле = 128
			{
				state = PORTD & (1>>7);
			}
		}
		
		//заполняем ответный пакет
		for(int i = 0; i < 10; i++)
		{
			out->synhead[i] = in->synhead[i];
		}
		out->ver = in->ver;
		out->dest = in->src;
		out->src = in->dest;
		out->packetnum = in->packetnum;
		for(int i = 0; i < 3; i++)
		{
			out->syntail[i] = in->syntail[i];
		}
		if(in->type == 165)
		{
			out->type = 146;

			out->data.command = 0x93;
			out->data.devnum = 0x93;
			out->data.value = 0x93939393;

			out->crc16 = gen_crc16(out + PACKET_DATA_FROM, PACKET_DATA_LENGTH);
		}
		else
		{
			if(in->type == 51)
			{
				out->type = 204;
				out->data.command = 101;
				out->data.devnum = in->data.devnum;
				out->data.value = state;//значение в зависимости от состояния устройства
				out->crc16 = gen_crc16(out + PACKET_DATA_FROM, PACKET_DATA_LENGTH);
			}
		}
		
	}
}

void sendtouart(struct packet * pac)
{
	uint8_t * p = (uint8_t *)pac;
	for (int i=0; i<PACKET_LENGTH; i++)
	{
		uart_send(p[i]);
	}
}

int main (void)
{
	board_init();
	DDRD = 0b11000000;
	DDRB = 0b00000111;
	uart_init_withdivider(103);
	PORTB = 0b00000000;
	struct protocol prt; 
	prt.prcs_func = process;
	prt.send_func = sendtouart;


	//relay_ops(1, 1);
	//_delay_ms(1000);
	//relay_ops(2, 1);
	//_delay_ms(1000);
	//relay_ops(1, 0);
	//_delay_ms(1000);
	//relay_ops(2, 0);
	//_delay_ms(1000);	
	while(1)
	{
		append_byte(&prt,uart_peek());
	}

}
