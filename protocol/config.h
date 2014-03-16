#ifndef imit_sw6_config_h
#define imit_sw6_config_h

#define PACKET_LENGTH		32
#define PACKET_DATA_FROM	10
#define PACKET_DATA_LENGTH	17
#define TIME_DELAY_mSEC     53

#define LOCALADDRESS 0xFF000001
#include "packet.h"


typedef void * (process_func)(const struct packet * in, struct packet * out);
typedef void * (sendpacket_func)(const struct packet* in);

#endif
