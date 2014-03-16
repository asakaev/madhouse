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
	uint8_t current_pointer;

	uint8_t data_send[PACKET_LENGTH];
	uint8_t data_recv[PACKET_LENGTH];

	sendpacket_func snd_func;
	process_func	prcs_func;

	uint32_t localaddress;

	void append_byte(uint8_t byte)
	{
		current_pointer++;
		data_recv[current_pointer] = byte;
		
	}

};

#endif
