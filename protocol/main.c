#include <stdio.h>
#include "memory.h"
#include "packet.h"

int main()
{
	printf("%ld\n", sizeof(struct packet));
	printf("%ld\n", sizeof(union dev_address));
    printf("%ld\n", sizeof(uint16_t));

	union dev_address src = {0};
	union dev_address dst = {150};
	//struct packet *p = createpacket(10, 20, 30);
	struct packet *p = createpacket(dst, src, 10, 155, 50, 128, 255);

	uint8_t data[30] = {0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAB, 0x01, 0x96, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0A, 0x9B, 0x32, 0x80, 0xFF, 0x00, 0x52, 0x7E, 0xD3, 0xD3, 0xD3};
	uint16_t s = gen_crc16(data+11, 16);
	return 0;
}