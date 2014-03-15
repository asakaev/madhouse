#include "packet.h"
#include <string.h>
#include "crc16.h"


struct packet* createpacket(unsigned char command, unsigned char devnum, unsigned char value)
{
	struct packet * a = allocate(sizeof(struct packet));
	if (!a) { return 0; }
	memset(a->synhead, 170, 9);
	a->synhead[9] = 171;
	memset(a->syntail, 211, 3);

	a->data.command = command;
	a->data.devnum = devnum;
	a->data.value = value;
	return a;
}
struct packet* getpacket(uint8_t * buff)
{
	unsigned char test[3] = {211,211,211};
	if (memcmp(buff+27, test, 3)==0)
	{
		uint16_t crc16 = gen_crc16(buff+10, 16);

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