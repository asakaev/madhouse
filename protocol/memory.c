#include "memory.h"

// size_t - uint (сколько байт выделять)
void* allocate(size_t sz)
{
	void* buffer = malloc(sz);
	return buffer;
}

void freemem(void* mem)
{
	free(mem);
}