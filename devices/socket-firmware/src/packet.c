#include "packet.h"
#include <string.h>

struct packet* createpacket(union dev_address dest, union dev_address src, uint8_t type, uint8_t packetnum, uint8_t command, uint8_t devnum, uint32_t value)
{
	struct packet * a = allocate(sizeof(struct packet));
	if (!a) { return 0; }
	memset(a->synhead, 170, 9);
	a->synhead[9] = 171;
	memset(a->syntail, 211, 3);

	a->data.command = command;
	a->data.devnum = devnum;
	a->data.value = value;

	a->src = src;
	a->dest = dest;
	a->type = type;
	a->packetnum = packetnum;
	a->ver = PROTO_VER;
    uint8_t *p = (uint8_t)a;

	a->crc16 = gen_crc16(p+PACKET_DATA_FROM, PACKET_DATA_LENGTH);
	return a;
}
struct packet* getpacket(uint8_t * buff)
{
	unsigned char test[3] = {211,211,211};
	if (memcmp(buff+29, test, 3)==0)
	{
		uint16_t crc16 = gen_crc16(buff+PACKET_DATA_FROM, PACKET_DATA_LENGTH);

		uint16_t pckt_crc16 = 0;
		memcpy((void *)&pckt_crc16, (void *)(buff+27), 2);

		//if (crc16!=pckt_crc16)
		struct packet * pp = buff;
		if (pp->ver!=1)
		{
			return NULL;
		}
		return pp;
	}
	return NULL;
}
