[{"Owner":"Brunex92","Date":"2016-12-08T17:46:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!_lt_br /_gt__lt_br /_gt_\n\tSo_co_ I_t_ve programming on javascript for not so long_co_ and I_t_m trying to do this simple project where I get data from a matrix and draw in canvas_co_ just like this playground_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProblem is...  Everytime I call the function_co_ it will always draw the center sphere_co_ multiple times_co_ which obviously is not what is intendend...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone can help me with that? Like using an exception everytime it tries to draw an object where it alredy is\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis looks really simple to do_co_ but I have not idea how do I get the data from the object before I draw it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-08T18:39:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1XHNOR%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1XHNOR#0_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tb_eq_a is your friend\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#YCVDD%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#YCVDD#23_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#DMLWQ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#DMLWQ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//geniuscarrier.com/copy-object-in-javascript/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//geniuscarrier.com/copy-object-in-javascript/_lt_/a_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//blog.soulserv.net/understanding-object-cloning-in-javascript-part-ii/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blog.soulserv.net/understanding-object-cloning-in-javascript-part-ii/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-12-08T18:41:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot entirely sure what you are trying to achieve. Have given each row of the matrix a different colour and where y variables for matrix[\\i][4] gave same positions changed them by radius of sphere. Hope that this might help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#1_lt_/a_gt__lt_em_gt__lt_em_gt_ _lt_/em_gt__lt_/em_gt__lt_em_gt_ _lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-12-08T19:22:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154288_qt_ data-ipsquote-contentid_eq__qt_26916_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481222495_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/8/2016 at 12_dd_41 PM_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNot entirely sure what you are trying to achieve. Have given each row of the matrix a different colour and where y variables for matrix_lt_em_gt_[4] gave same positions changed them by radius of sphere. Hope that this might help. _lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#1_lt_/a_gt__lt_em_gt_ _lt_/em_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI actually need that these objects are linked through a center object_co_ so changing its position won_t_t work for me_co_ the point is everytime I call the function to draw it_co_ the center object will be rendered over and over again_co_ until the loop is over_co_ because that_t_s how my code works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst I set its color_co_ using the matrix_lt_em_gt_[6]_co_ matrix_lt_/em_gt__lt_em_gt__lt_em_gt_[7]_co_ matrix_lt_/em_gt__lt_/em_gt__lt_em_gt__lt_em_gt__lt_em_gt_[8]_co_ then I draw the the external sphere using the matrix_lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_em_gt__lt_em_gt__lt_em_gt__lt_em_gt_[0]_co_[1]_co_[2]_co_ then the center one with the rest of it_co_ linking both of the spheres. _lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt__lt_em_gt__lt_em_gt_So what I want is once I draw the center one time_co_ it won_t_t be rendered again when the loop finds it again_co_ only the external sphere _lt_/em_gt__lt_/em_gt__lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-09T06:27:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt_ Can_t_t see any sphere in the middle can you comment the problematic code out_co_ so i can comment it in again and debug\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-12-09T16:51:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154371_qt_ data-ipsquote-contentid_eq__qt_26916_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481264875_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/9/2016 at 12_dd_27 AM_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt_ Can_t_t see any sphere in the middle can you comment the problematic code out_co_ so i can comment it in again and debug\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSure!_lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 69-80\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere you go_co_ the center spheres in this playground are [10_co_ 0_co_ 10_co_] and [0_co_ 0_co_ 0] they are linked to external spheres._lt_br /_gt_\n\tImagine it as a cluster or a network_co_ every PC is connected to a router_co_ the router is the center sphere_co_ the PCs are the external ones.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-12-09T18:34:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhhh now I understand in your scene there are two center sphere_co_ one for the grey network and one for the black network_co_ whereas I and_co_ perhaps_co_ Nabroski were wondering where this group of overlapping sphere were in your scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn example like this may have helped _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnless you are firmly wedded to the data structure you have currently then maybe a different data structure would be better.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-12-09T18:45:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154480_qt_ data-ipsquote-contentid_eq__qt_26916_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481308444_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/9/2016 at 12_dd_34 PM_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAhhh now I understand in your scene there are two center sphere_co_ one for the grey network and one for the black network_co_ whereas I and_co_ perhaps_co_ Nabroski were wondering where this group of overlapping sphere were in your scene.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAn example like this may have helped _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#5_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUnless you are firmly wedded to the data structure you have currently then maybe a different data structure would be better.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHmm_co_ they_t_re still there_co_ on this PG you provided_co_ there are 6 center spheres at the [0_co_ 0_co_ 0]_co_ and that is exactly what I dont want_co_ there are 5 unnecessary objects\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ which data structure you think it would be better to use?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-12-09T18:52:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry perhaps I wasn_t_t clear_co_ I did not say the playground solved your problem only that it was much clearer in showing what the problem is. Each cylinder has a central red mesh which is drawn for each cylinder. What is required is that the central red mesh is only drawn once.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCannot help with a new data structure now as my dinner is about to be served. I will have a look after dinner. In the meantiime perhaps someone else will have a look at the thread.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-12-09T20:22:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA change of data structure - centre only drawn once\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-09T21:55:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif its possible to redefine your matrix you can stop in a for loop like this_lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.w3schools.com/js/js_break.asp_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.w3schools.com/js/js_break.asp_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-12-09T23:30:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154509_qt_ data-ipsquote-contentid_eq__qt_26916_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481314977_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/9/2016 at 2_dd_22 PM_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tA change of data structure - centre only drawn once\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#6_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHmmm_co_ that will only work if I know the centers_co_ my project is a little bit different_co_ I load a text file with the matrix_co_ read it and the draw it_co_ so I don_t_t know what are the centers.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154528_qt_ data-ipsquote-contentid_eq__qt_26916_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481320550_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/9/2016 at 3_dd_55 PM_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tif its possible to redefine your matrix you can stop in a for loop like this_lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#7_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.w3schools.com/js/js_break.asp_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.w3schools.com/js/js_break.asp_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI can_t_t as said above.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-10T03:42:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can always find the center of a mesh with_dd_ mesh.getBoundingInfo().boundingSphere.centerWorld\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-10T06:32:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#9_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-12-10T09:54:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154546_qt_ data-ipsquote-contentid_eq__qt_26916_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481326223_qt_ data-ipsquote-userid_eq__qt_21317_qt_ data-ipsquote-username_eq__qt_Brunex92_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/9/2016 at 5_dd_30 PM_co_ Brunex92 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHmmm_co_ that will only work if I know the centers_co_ my project is a little bit different_co_ I load a text file with the matrix_co_ read it and the draw it_co_ so I don_t_t know what are the centers.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSo keep the same incoming data structure_co_ do a conversion into a data structure where the centres and colours are only stored once and then draw networks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis time with a more random selection of nodes and centres.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-12-12T17:20:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154584_qt_ data-ipsquote-contentid_eq__qt_26916_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481363685_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/10/2016 at 3_dd_54 AM_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSo keep the same incoming data structure_co_ do a conversion into a data structure where the centres and colours are only stored once and then draw networks.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#10_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis time with a more random selection of nodes and centres.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#11_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#191SVM%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#191SVM#11_lt_/a_gt_  - That works perfectly! Thanks a lot _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]