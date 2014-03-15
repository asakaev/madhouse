#include <stdio.h>
#include "memory.h"
#include "packet.h"

int main()
{
	printf("%d\n", sizeof(struct packet));
	printf("%d\n", sizeof(union dev_address));
	return 0;
}