/*
 * serialTest.c:
 *	Very simple program to test the serial port. Expects
 *	the port to be looped back to itself
 *
 */

#include <stdio.h>
#include <string.h>
#include <errno.h>

#include <wiringPi.h>
#include <wiringSerial.h>

int main ()
{
  int fd ;

  printf ("Started\n");

  if ((fd = serialOpen ("/dev/ttyAMA0", 4800)) < 0)
  {
    fprintf (stderr, "Unable to open serial device: %s\n", strerror (errno)) ;
    return 1 ;
  }

  if (wiringPiSetup () == -1)
  {
    fprintf (stdout, "Unable to start wiringPi: %s\n", strerror (errno)) ;
    return 1 ;
  }

// Recieve

  for (count = 0 ; count < 10 ; )
  {
    delay (5);

    while (serialDataAvail (fd))
    {
      printf (" -> %c", serialGetchar (fd)) ;
      fflush (stdout) ;
    }
  }


// Transfer
/*  var char sendC = 'c';
  printf("Sending \"%c\"", sendC);

  for (;;)
  {
    delay (10);

    var char sendC = 'c';

    serialPutchar(fd, sendC);
  }*/

  printf ("Closed\n") ;
  return 0 ;
}
