#include <stdio.h>
#include "memory.h"
#include "packet.h"

int main()
{
	printf("%ld", sizeof(struct packet));
	return 0;
}