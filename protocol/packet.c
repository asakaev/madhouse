#include "packet.h"

packet* createpacket()
{
	packet* a = allocate(sizeof(packet));
	if (!a) { return 0; }

	memset(a->synhead, 170, 9);
	a->synhead[9] = 171;
	memset(a->syntail, 211, 3);

	return a;
}

packet* createpacket(unsigned char command, unsigned char devnum = 0, unsigned char value = 0)
{
	packet* a = createpacket();
	if(!a) { return 0; }

	a->data.command = command;
	a->data.devnum = devnum;
	a->data.value = value;
	return a;
}

