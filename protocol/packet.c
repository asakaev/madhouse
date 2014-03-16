#include "packet.h"
#include <string.h>

struct packet* createpacket(uint32_t dest, uint32_t src, uint8_t type, uint8_t packetnum, uint8_t command, uint8_t devnum, uint8_t value)
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

	a->crc16 = gen_crc16(p+10, 15);
	return a;
}
struct packet* getpacket(uint8_t * buff)
{
	unsigned char test[3] = {211,211,211};
	if (memcmp(buff+27, test, 3)==0)
	{
		uint16_t crc16 = gen_crc16(buff+10, 15);

		uint16_t pckt_crc16 = 0;
		memcpy((void *)&pckt_crc16, (void *)(buff+26), 2);

		if (crc16!=pckt_crc16)
		{
			return NULL;
		}
		return (struct packet*)buff;
	}
	return NULL;
}