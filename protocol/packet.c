#include "packet.h"
#include <string.h>

struct packet* createpacket(uint8_t command, uint8_t devnum, uint8_t value)
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
struct packet* getpacket(char * buff)
{
	// FIXME : добавить проверку CRC16 кода
	unsigned char test[3] = {211,211,211};
	if (memcmp(buff+27, test, 3)==0)
	{
		return (struct packet*)buff;
	}
	return NULL;
}