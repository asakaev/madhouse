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

#define ON_RED 0b00000001
#define OFF 0b00000111




int main (void)
{

	board_init();
	DDRB = 0b00000111;
	DDRD = 0b11000000;
	//uart_init_withdivider(207);
	PORTB = 0b00011110;
	while(1)
	{
		
		//if (!(PORTB & 8))
		//{
			//PORTB &= 0xfe;
		//}
		//
		PORTD ^=128;
		_delay_ms(1000);
		PORTD ^=64;
		////if (uart_peek() == 'n')
		//{
			//PORTB = 0b00000000;
		//}
		////if (uart_peek() == 'f')
		//{
			//PORTB = OFF;
		//}
		_delay_ms(4000);
		////uart_send('p');
	}

}
