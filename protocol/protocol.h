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
	    for(int i = 0; i < PACKET_LENGTH - 1; i++)
        {
            data_recv[i] = data_recv[i + 1];
        }
		/*
		сдвинуть весь массив на один символ влево
        */

		data_recv[PACKET_LENGTH-1] = byte;

		struct packet *packet_to_read = getpacket(&data_recv);
		if(packet_to_read)
        {
            struct packet packet_to_send;
            if(prcs_func(pacet_to_read, &packet_to_send))
            {
                send_func(&packet_to_send);
            }
        }
		//вызвать проверку на пакет
		//если пакет, то вызвать функцию обработки пакета
		//вернула нормальный пакет с ответом, то
		//мы вызываем функцию отправки пакета
	}



};

#endif
