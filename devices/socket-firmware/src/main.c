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
#include <asf.h>
#include <util/delay.h>
#include "bwl_uart_lib.h"

int main (void)
{

	board_init();
	DDRC=0b11111111;
	PORTC=0b00010000;
	
	uart_init_withdivider(207);
	//uart_init_withbaud(16000, 4800);
	while(1)
	{
		PORTC ^= 16;
		_delay_ms(1000);
		uart_send('j');
	}

}
