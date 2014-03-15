#include <stdio.h>
#include "memory.h"
#include "packet.h"

int main()
{
	printf("%ld\n", sizeof(struct packet));
	printf("%ld\n", sizeof(union dev_address));
	return 0;
}