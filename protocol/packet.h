// #pragma once // компилируется один раз
#include "memory.h"
#include <stdint.h>
#pragma pack(1)

#define PROTO_VER 0x01

uint32_t dev_address;

struct packet
{
	uint8_t synhead[10];
	uint8_t ver;
	uint32_t dest;
	uint32_t src;
	uint8_t type;
	uint8_t packetnum;
	struct
	{
		uint8_t command;
		uint8_t devnum;
		uint16_t value;
	} data;
	uint16_t crc16;
	uint8_t syntail[3];
} ;
/*
 Созадние пакета
 если все успешно - возвращается указатель
 в противном случае - возвращается NULL
 */

struct packet* createpacket(uint32_t dest, uint32_t src, uint8_t type, uint8_t packetnum, uint8_t command, uint8_t devnum, uint8_t value);
/*
 Если в буфере лежит пакет, то возвращается структура пакета, 
 в противном случае возвращается значение 0
 */
struct packet* getpacket(uint8_t * buff);
