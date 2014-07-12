hbs-moment
==========

Add moment helper to hbs


  {{moment 'now' format='MMMM Do YYYY, h:mm:ss a'}} <br/>
  {{moment 'now' format='dddd'}} <br/>
  {{moment 'now' format='MMM Do YY'}} <br/>
  {{moment 'now' format='YYYY [escape] YYYY'}} <br/>
  {{moment 'now' format=''}}

    <br /> <br/>

  {{moment '20111031 YYYYMMDD' fromNow=''}} <br/>
  {{moment '20120620 YYYYMMDD' fromNow=''}} <br/>
  {{moment 'now' fromNow = 'start day'}} <br/>
  {{moment 'now' fromNow = 'end day'}} <br/>
  {{moment 'now' fromNow = 'start hour'}} <br/>

  <br/><br/>

  {{moment 'now' calendar = 'subtract days 10'}} <br/>
  {{moment 'now' calendar = 'subtract days 6'}} <br/>
  {{moment 'now' calendar = 'subtract days 3'}} <br/>
  {{moment 'now' calendar = 'subtract days 1'}} <br/>
  {{moment 'now' calendar = ''}} <br/>
  {{moment 'now' calendar = 'add days 1'}} <br/>
  {{moment 'now' calendar = 'add days 3'}} <br/>
  {{moment 'now' calendar = 'add days 10' lang='zh-cn'}} <br/>
  
  July 12th 2014, 3:34:43 pm
Saturday
Jul 12th 14
2014 escape 2014
2014-07-12T15:34:43+08:00

3 years ago
2 years ago
16 hours ago
in 8 hours
35 minutes ago


07/22/2014
Friday at 3:34 PM
Tuesday at 3:34 PM
Tomorrow at 3:34 PM
Today at 3:34 PM
Tomorrow at 3:34 PM
Tuesday at 3:34 PM
2014年7月22日
