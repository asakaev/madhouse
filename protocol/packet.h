// #pragma once // компилируется один раз
#include "memory.h"

struct packet
{
	unsigned char synhead[10];
	unsigned char ver;
	long dest;
	long src;
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
};

// packet* createpacket();
// packet* createpacket(unsigned char command, unsigned char devnum = 0, unsigned char value = 0);