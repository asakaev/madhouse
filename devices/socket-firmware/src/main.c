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

#define ON_RED 0b00000001
#define OFF 0b00000111

void prcs_func(struct packet * in, struct packet * out)
{

}

void send_func(struct packet * pac)
{
	int p = pac;
	for (int i=0; i<PACKET_LENGTH; i++)
	{
		uart_send(p[i]);
	}
}

int main (void)
{
	board_init();
	//DDRB = 0b00000111;
	//DDRD = 0b11000000;
	uart_init_withdivider(207);
	//PORTB = 0b00011110;
	

	struct protocol prt; 

	while(1)
	{
		prt.append_byte(uart_peek());

	}

}
