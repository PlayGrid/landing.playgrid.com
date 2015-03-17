<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Define Charset -->
    <meta charset="utf-8">
     <!-- Responsive Metatag -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page Description and Author -->
    <meta name="description" content="content description">
    <meta name="author" content="PlayGrid">
    <!-- Page Title -->
    <title>PlayGrid - Complete Game Operating Platform</title>

    <?php wp_head(); ?>
   
    <!-- Fav and touch icons -->
    <link rel="shortcut icon" href="<?php bloginfo('template_directory');?>/img/favicon.ico">
    <link rel="apple-touch-icon" href="<?php bloginfo('template_directory');?>/img/icons/apple-touch-icon-57-precomposed.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('template_directory');?>/img/icons/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('template_directory');?>/img/icons/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php bloginfo('template_directory');?>/img/icons/apple-touch-icon-144-precomposed.png">

</head>


<body <?php body_class(); ?>>

<!-- Header-->
<header id="header" class="bg_color1 sticky">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="row">
                    
                    <div class="col-md-4">
                        <div class="logo">
                            <!--logo-->
                            <a href="index.html" class="brand">
                                <img src="<?php bloginfo('template_directory');?>/img/logo/logo.png" alt="PlayGrid-Logo">
                            </a>
                            <!--logo-->
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="navbar">
                            <div class="navbar-inner">
                               <ul id="nav" class="nav list-unstyled list-inline align_right">
                                    <li class="active">
                                        <span class="underline"></span>
                                        <a href="#home">
                                            Home
                                        </a>
                                        <span class="underline"></span>
                                    </li>
                                    <li>
                                        <span class="underline"></span>
                                        <a href="#second_area">
                                            Features
                                        </a>
                                        <span class="underline"></span>
                                    </li>
                                    <li>
                                        <span class="underline"></span>
                                        <a href="#table">
                                            Pricing
                                        </a>
                                        <span class="underline"></span>
                                    </li>
                                    <li>
                                        <span class="underline"></span>
                                        <a href="https://www.playgrid.com/account/login/">
                                            Sign in
                                        </a>
                                        <span class="underline"></span>
                                    </li>
                                </ul>
                            </div>
                        <!-- end .navbar-inner -->
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    </div>
</header>
<!-- end header-->