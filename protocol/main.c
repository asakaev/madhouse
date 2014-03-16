#include <stdio.h>
#define packsize 32
#include "memory.h"
#include "packet.h"
#include "readfile.h"
#include "config.h"
#include "getpackfromnode.h"
union dev_address src = { 0 };
#define type 1
#define packetnum 1
#define defval 0
#define fname "/Users/macbook/node_buffer.txt"
#define fnameout "/Users/macbook/c_buffer.txt"
#define defdevice 0

int serialPutchar(char a) { return 0; }
int serialGetchar(char a) { return 0; }

int main(int argc, const char * argv[])
{
    char *str = readfile(fname);
    uint8_t cmd = str[0] - '0';
    uint8_t dstFromNode = str[1] - '0';
    union dev_address dst = { dstFromNode };
    
    if (str) // если есть файл
    {
        // создали пакет
        struct packet* p = createpacket(dst, src, type, packetnum, cmd, defdevice, defval);
        free(str);
        
        char output[packsize];
        memcpy(&output, p, packsize);
        
        // Отправляем в ком
        int i = 0;
        for (; i < packsize; i++) {
            serialPutchar(output[i]);
        }
        
        sleep(3); // 3 секунды. странно! xcode

        // Пишем в этот же буфер читая из ком
        for (i = 0; i < packsize; i++) {
            serialGetchar(output[i]);
        }
        
        // сформировали пакет из данных которые пришли. всё работает тут!!!
        memcpy(p, &output, packsize);
        
        int a = 5;
        uint32_t srcaddr = p->dest.s_l;
        uint8_t state = p->data.command;
        
        FILE* fd = fopen(fnameout, "w");

        
        if (fd) {
            fprintf(fd, "%d%d", state, srcaddr);
        }
                
    }
    else
    {
        printf("File not found.");
        return 0;
    }
    

    printf("Hello, World!\n");
    return 0;
}