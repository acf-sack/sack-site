<?PHP
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/contact-form/creating-a-contact-form.html
*/
require_once("./include/fgcontactform.php");

$formproc = new FGContactForm();


//1. Add your email address here.
//You can add more than one receipients.
$formproc->AddRecipient('jayasanka.sack@gmail.com'); //<<---Put your email address here


//2. For better security. Get a random tring from this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('FBFfQmilrH1mcon');


if(isset($_POST['submitted']))
{
   if($formproc->ProcessForm())
   {
        $formproc->RedirectToURL("thank-you.php");
   }
}

?>
<!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="../assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    
    <script type='text/javascript' src='scripts/gen_validatorv31.js'></script>
	
	<title>Contact Us</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    
    <link href="../bootstrap3/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../assets/css/gsdk.css" rel="stylesheet"/>
    <link href="../assets/css/examples.css" rel="stylesheet"/>

    <!--     Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet"> 
    <link href='https://fonts.googleapis.com/css?family=Grand+Hotel|Open+Sans:400,300' rel='stylesheet' type='text/css'>  
    <link href="../assets/css/pe-icon-7-stroke.css" rel="stylesheet" />  
    <style>
        #contactus .spmhidip
{
   display:none;
   width:10px;
   height:3px;
}
#contactus .error
{
   font-family: Verdana, Arial, sans-serif; 
   font-size: 0.7em;
   color: #900;
   background-color : #ffff00;
}
    </style>
</head>

<body class="contact-us">

<nav class="navbar navbar-inverse navbar-transparent navbar-fixed-top" role="navigation">
    <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button id="menu-toggle" type="button" class="navbar-toggle">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar bar1"></span>
        <span class="icon-bar bar2"></span>
        <span class="icon-bar bar3"></span>
      </button>
      <a class="navbar-brand" href="#">#EVISION Ad Store</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
            <li>
                <a href="#" >
                    Escape 
                </a>
            </li>
            <li>
                <a href="#">
                    Ayubowan Mahanuwara 
                </a>
            </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
            <li>
                <a href="#">
                    <span> Discover</span>
                </a>
            </li>
            <li>
                <a href="#">
                     About Us
                </a>
            </li>
            <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    More 
                    <b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu ">
                    <li>
                        <a href="#">
                             Ayubowan Mahanuwara
                        </a>
                    </li>
                    <li>
                        <a href="#">
                             Ayubowan Colombo
                        </a>
                    </li>
                    <li>
                        <a href="#">
                             Escape Online
                        </a>
                    </li>
                    
                  </ul>
            </li>
            <li><a href="#" class="btn btn-round btn-default">Contact Now</a></li>
       </ul>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<div class="wrapper">
    <div class="parallax">
           <div class="company-description">
               <h4>Evision Ad Store (Pvt) Ltd.</h4>
               <p>Narahenpita, Colombo 05</p>
           </div>
            <div id="contactUsMap" class="big-map"></div>
    </div>

    <div class="section">
           <div class="container">
               <h2 class="section-title">Send us a message</h2>
               <div class="row">
                   <div class="col-md-6">
                       <p>
                           You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.<br><br>
                           <div><span class='error'><?php echo $formproc->GetErrorMessage(); ?></span></div>
                        </p>
                        <form role="form" id="contactus" method="post" action='<?php echo $formproc->GetSelfScript(); ?>'>
                            <input type='hidden' name='submitted' id='submitted' value='1'/>
                                <input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
                                <input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />
    						<div class="form-group">
    				    		<label for="name">Your name</label>
    				    		<input type="text" name="name" class="form-control" id="name" placeholder="First Name and Last Name" value='<?php echo $formproc->SafeDisplay('name') ?>' maxlength="50"/>
                                <input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />                                
    				  		</div>
    				  		<div class="form-group">
    				    		<label for="email">Email address</label>
    				    		<input type="email" name="email" class="form-control" id="email" placeholder="Your personal email address" value='<?php echo $formproc->SafeDisplay('email') ?>' maxlength="50"/>
                                <span id='contactus_email_errorloc' class='error'></span>
    				  		</div>    				  		
    				  		<div class="form-group">
    				    		<label for="message">Your message</label>
                                <span id='contactus_message_errorloc' class='error'></span>
    				    		<textarea name="message" class="form-control" id="message" rows="6"><?php echo $formproc->SafeDisplay('message') ?></textarea>
    				  		</div>
    				  		<div class="submit">
    				  			<input type="submit" class="btn btn-info btn-fill" value="Submit" />
    				  		</div>
    					</form>
                   </div>
                   <div class="col-md-4 col-md-offset-2">
                        <div class="contact-info">
                            <h5><i class="fa fa-map-marker text-muted"></i> Address</h5>
                            <p class="text-muted"> Bld Mihail Kogalniceanu, nr. 8,<br>
                                7652 Bucharest,<br>
                                Romania 
                            </p><br>
                            <h5><i class="fa fa-phone text-muted"></i> Live Support</h5>
                            <p class="text-muted"> Michael Jordan<br>
                                +40 762 321 762<br>
                                Mon - Fri, 8:00-22:00
                            </p><br>
                            <h5><i class="fa fa-building text-muted"></i> Business Info</h5>
                            <p class="text-muted"> Creative Tim Ltd.<br>
                                VAT &middot; EN2341241<br>
                                IBAN &middot; EN8732ENGB2300099123<br>
                                Bank &middot; Great Britain Bank
                            </p>
                        </div>
                   </div>
               </div>
           </div>
    </div><!-- section -->
    <div class="space-50"></div>
    
    <footer class="footer footer-big footer-black">
        <!-- .footer-black is another class for the footer, for the transparent version, we recommend you to change the url of the image with your favourite image.          -->
        
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <h5 class="title">Company</h5>
                    <nav>
                        <ul>
                            <li>
                                <a href="#" >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                   Find offers
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Discover Projects
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Our Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-3 col-md-offset-1">
                    <h5 class="title"> Help and Support</h5>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">
                                   Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                   How it works
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Company Policy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                   Money Back
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-3">
                    <h5 class="title">Follow us on</h5>
                    <nav>
                        <ul>
                            <li>
                                <a href="#" class="btn btn-social btn-facebook btn-simple">
                                    <i class="fa fa-facebook-square"></i> Facebook
                                </a>
                            </li>
                             <li>
                                 <a href="#" class="btn btn-social btn-dribbble btn-simple">
                                    <i class="fa fa-dribbble"></i> Dribbble
                                </a>
                            </li>
                            <li>
                               <a href="#" class="btn btn-social btn-twitter btn-simple">
                                    <i class="fa fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                 <a href="#" class="btn btn-social btn-reddit btn-simple">
                                    <i class="fa fa-google-plus-square"></i> Google+
                                </a>
                            </li>
                           
                        </ul>
                    </nav>
                </div>

                 <div class="col-md-3">
                    <h5 class="title">Latest News</h5>
                    <nav>
                        <ul>
                            <li>
                                <a href="#" >
                                   <i class="fa fa-twitter"></i> <b>Get Shit Done</b>
                                   The best kit in the market is here, just give it a try and let us...
                                   <hr class="hr-small">
                                </a>
                            </li>
                            <li>
                                  <a href="#" >
                                   <i class="fa fa-twitter"></i>
                                   We've just been featured on <b> Awwwards Website</b>! Thank you everybody for...
                                </a>
                            </li>
                          
                        </ul>
                    </nav>
                </div>

            </div>
            <hr />
            <div class="copyright">
                &copy; 2016 Creative Tim, made with love
            </div>
        </div>
    </footer>    
    
</div> <!-- wrapper --> 
</body>
    <!--  jQuery and Bootstrap core files    -->
    <script src="../assets/js/jquery.js" type="text/javascript"></script>
	<script src="../assets/js/jquery-ui.custom.min.js" type="text/javascript"></script>
	<script src="../bootstrap3/js/bootstrap.min.js" type="text/javascript"></script>

	<!--  Plugins -->
	<script src="../assets/js/gsdk-checkbox.js"></script>
	<script src="../assets/js/gsdk-morphing.js"></script>
	<script src="../assets/js/gsdk-radio.js"></script>
	<script src="../assets/js/gsdk-bootstrapswitch.js"></script>
	<script src="../assets/js/bootstrap-select.js"></script>
	<script src="../assets/js/bootstrap-datepicker.js"></script>
	<script src="../assets/js/chartist.min.js"></script>
    <script src="../assets/js/jquery.tagsinput.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdGTop8lq6qprirXXY00WUq1Hn1NXIWZg"></script>

    <!--  Get Shit Done Kit PRO Core javascript 	 -->
	<script src="../assets/js/get-shit-done.js"></script>
    
    <script type="text/javascript">
        var parallax_map;
        $().ready(function(){
            responsive = $(window).width();
        
            examples.initContactUsMap();
            
            if (responsive >= 768){
                parallax_map = $('.parallax').find('.big-map');
                
                $(window).on('scroll',function(){           
                    parallax();
                    gsdk.checkScrollForTransparentNavbar();
                });
            }
            
        });        

       var parallax = function() {
            var current_scroll = $(this).scrollTop();
            
            oVal = ($(window).scrollTop() / 3); 
            parallax_map.css('top',oVal);
        };

    </script>
    
    <!-- If you are using TypeKit.com uncomment this code otherwise you can delete it -->
    <!--
    <script src="https://use.typekit.net/[your kit code here].js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    -->

    <!-- If you have retina @2x images on your server which can be sent to iPhone/iPad/MacRetina, please uncomment the next line, otherwise you can delete it -->
	<!-- <script src="assets/js/retina.min.js"></script> -->

    
</html>
