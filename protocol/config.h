//
//  config.h
//  imit.sw6
//
//  Created by Михаил on 15.03.14.
//  Copyright (c) 2014 imit. All rights reserved.
//


#ifndef imit_sw6_config_h
#define imit_sw6_config_h

#define PACKET_LENGTH		32
#define PACKET_DATA_FROM	10
#define PACKET_DATA_LENGTH	17
#define TIME_DELAY_mSEC     53

#define LOCALADDRESS 0xFF000001


typedef void *(const packet * in, packet * out) process_func;
typedef void * (const packet* in) sendpacket_func;

#endif
