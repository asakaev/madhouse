// #pragma once // компилируется один раз
#include "memory.h"
#include <stdint.h>
#include "crc16.h"
#pragma pack(1)

#define PROTO_VER 0x01

union dev_address
{
	struct
	{
		uint8_t b1;
		uint8_t b2;
		uint8_t b3;
		uint8_t b4;
	}s_b;
	struct
	{
		uint16_t s1;
		uint16_t s2;
	}s_w;
	uint32_t s_l;
};

struct packet
{
	uint8_t synhead[10];
	uint8_t ver;
	union dev_address dest;
	union dev_address src;
	uint8_t type;
	uint8_t packetnum;
	struct
	{
		uint8_t command;
		uint8_t devnum;
		uint32_t value;
	} data;
	uint16_t crc16;
	uint8_t syntail[3];
} ;
/*
 Созадние пакета
 если все успешно - возвращается указатель
 в противном случае - возвращается NULL
 */

struct packet* createpacket(union dev_address dest, union dev_address src, uint8_t type, uint8_t packetnum, uint8_t command, uint8_t devnum, uint32_t value);
/*
 Если в буфере лежит пакет, то возвращается структура пакета,
 в противном случае возвращается значение 0
 */
struct packet* getpacket(uint8_t * buff);
