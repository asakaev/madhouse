// #pragma once // компилируется один раз
#include "memory.h"
#include <netinet/ip.h>
#pragma pack(1)

union dev_address
{
	struct
	{
		unsigned char b1;
		unsigned char b2;
		unsigned char b3;
		unsigned char b4;
	}s_b;
	struct
	{
		unsigned short s1;
		unsigned short s2;
	}s_w;
#if defined (__APPLE__)
	unsigned int s_l;
#elif defined (__linux__)
	unsigned int s_l;
#else
	unsigned long s_l;
#endif//;

};
struct packet
{
	unsigned char synhead[10];
	unsigned char ver;
	union dev_address dest;
	union dev_address src;
	unsigned char type;
	unsigned char packetnum;
	struct
	{
		unsigned char command;
		unsigned char devnum;
		unsigned short value;
	} data;
	unsigned short crc16;
	unsigned char syntail[3];
} ;

struct packet* createpacket(unsigned char command, unsigned char devnum, unsigned char value);