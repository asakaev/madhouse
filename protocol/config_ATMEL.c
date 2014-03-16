#include "config.h"

void sendpacket(const struct packet *in)
{
    uint8_t data_send;
    uint8_t *in2 = &in;
    for(int i = 0; i < PACKET_LENGTH - 1; i++)
    {
        data_send = *(in2 + i);

        /*
		 подача data_send на выход
        */
    }
}


void process(const struct packet *in, struct packet *out)
{
    for(int i = 0; i < 10; i++)
    {
        out->synhead[i] = in->synhead[i];
    }
    out->ver = in->ver;
    out->dest = in->src;
    out->src = in->dest;
    out->packetnum = in->packetnum;
    for(int i = 0; i < 3; i++)
    {
        out->syntail[i] = in->syntail[i];
    }
    if(in->type == 165)
    {
        out->type = 146;

        out->data.command = 0x93;
        out->data.devnum = 0x93;
        out->data.value = 0x93939393;

        out->crc16 = gen_crc16(out + PACKET_DATA_FROM, PACKET_DATA_LENGTH);
    }
    else
    {
        if(in->type == 51)
        {
            out->type = 204;

            out->data.command = in->data.command;
            out->data.devnum = in->data.devnum;
			//TODO значение в зависимости от состояния устройства
            out->data.value = 0;

            out->crc16 = gen_crc16(out + PACKET_DATA_FROM, PACKET_DATA_LENGTH);
        }
    }
}

