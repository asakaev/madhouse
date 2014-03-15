#include "packet.h"


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