//
//  protocol.h
//  imit.sw6
//
//  Created by Михаил on 15.03.14.
//  Copyright (c) 2014 imit. All rights reserved.
//

#ifndef imit_sw6_protocol_h
#define imit_sw6_protocol_h

#include "config.h"

struct protocol
{

	uint8_t data_send[PACKET_LENGTH];
	uint8_t data_recv[PACKET_LENGTH];

	//функция обработки пакета
	process_func	prcs_func;

	//функция отправки пакета
	sendpacket_func send_func;

	uint32_t localaddress;

	void append_byte(uint8_t byte)
	{
		/*
		сдвинуть весь массив на один символ влево
		 */
		data_recv[PACKET_LENGTH] = byte;
		//вызвать проверку на пакет
		//если пакет, то вызвать функцию обработки пакета
		//вернула нормальный пакет с ответом, то
		//мы вызываем функцию отправки пакета
	}


};

#endif
