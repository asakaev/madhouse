#include <stdio.h>
#include "memory.h"
#include "packet.h"

int main()
{
	printf("%ld\n", sizeof(struct packet));
	printf("%ld\n", sizeof(union dev_address));
    printf("%ld\n", sizeof(uint16_t));
	return 0;
}