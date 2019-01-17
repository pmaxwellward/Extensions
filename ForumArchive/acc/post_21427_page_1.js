[{"Owner":"meteoritool","Date":"2016-03-24T12:41:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemember _qt_Macromedia Flash_qt_ ? It is a dead technology that used to allow total freedom at the expense of HUGE computation. It has been abandoned... As much as I loved the possibilities at the time_co_ fact is_co_ running a somewhat simple game within your browser would require all the power and memory your computer could give_co_ no matter how powerful_co_ and in my humble opinion_co_ I_t_m happy it has been discontinued_co_ I HATED the way my -powerful then- MacbookPro would start to spin its fans at full speed_co_ full noise_co_ full heat.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I_t_m a beginner in trying to master BABYLON.JS_co_ and in my first experiments_co_ I notice the fans of my brand new super-spec MacbookPro behave sorta the same way_co_ soon after loading my scene_co_ the fans start to turn fast and loud_co_ Babylon.js pushes the computer to high temperature. And I don_t_t want my beloved Babylon.js framework to end up like Flash !!! lol \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChecking demos on the official babylon.js site_co_ I notice some of them render well without making the fans turn on (ex _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/Sponza/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/Demos/Sponza/_lt_/a_gt_) but others demand too much (ex _dd__lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/Train/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/Demos/Train/_lt_/a_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t###So_co_ trying to make it short_co_ what is the good way to go in order to keep the CPU usage low ? (like in the Sponza demo)###\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-Textures_dd_ -What is the recommended size ?_lt_br_gt_\n\t                 -How much CPU does it take to use bump_co_ specular_co_ etc... on top of the Diffuse one ?_lt_br_gt_\n\t-Lights_dd_     -Is there dynamic lighting on an optimized scene ? Of which kind ? how many ? How to bake static lighting ?_lt_br_gt_\n\t-Programming_dd_ -Is there a way to writing javascript code that would be better than another ?_lt_br_gt_\n\t                         -example_dd_ Is calling _qt_scene.getMeshByName(_qt_mesh.name_qt_)_qt_ more demanding than just _qt_mesh_qt_ ?_lt_br_gt_\n\t                         -how does the _qt_scene.registerBeforeRender()_qt_should be handled ? _lt_br_gt_\n\t                         -example_dd_ Is it a problem if calling _qt_for (var i_eq_0_sm_i&lt_sm_scene.meshes.length_sm_i++)_qt_ or _qt_for (i_eq_0_sm_i&lt_sm_scene.textures.length_sm_i++)_qt_ multiple times rather than just one time ?_lt_br_gt_\n\t                         -Is there a way to handle/optimize memory ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell this is just a few questions this topic can bring up ... I hope people participate with questions and answers_co_ we can decipher the magic behind perfect programming together !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-24T17:14:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello this is a really interesting question!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo reduce CPU usage_co_ here are some rules to follow_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Textures sizes do not impact CPU they are completely GPU handled\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Number of objects_dd_ try to keep it low\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Try to keep the number of materials low to avoid context switching\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- In a general manner_co_ try to reduce or completely avoid instancing new objects because it adds pressure to the garbage collector (which is fully CPU based)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Collisions and physics are also CPU intensive\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Particles and SPS are CPU intensive\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Shaders and postprocesses almost don_t_t use CPU\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-24T19:05:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRemember your GPU can have its own fan also _dd_-D\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would insist on the Garbage Collector part that DK talked about because this is really the part of _lt_em_gt_your_lt_/em_gt_ code what you can deal with once the render loop is started (internal BJS is designed to not allocate new objects).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBe really careful about what objects_co_ BJS ones or genuine JS ones (arrays_co_ JS objects_co_ etc) you create_co_ sometimes without being aware of this_co_ within the render loop. This has a huge impact on the way the browser deals with the memory allocations _dd_ sometimes the GC is triggered as soon as the objects are disposed (FF)_co_ sometimes the browser has a cache mechanism and the GC waits before starting to collect the dust to have a decent amount to sweep... but when he starts_co_ he doesn_t_t ask your permission (chrome). You_t_ll feel this quickly as well in the CPU increasing charge (so the fans)_co_ as well in the decreasing FPS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo a good advice imho_co_ a Javascript is really well designed for this (scopes_co_ reference passing_co_ etc) would be to be careful and to explicitly allocate the more possible objects of your scene before the render loop starts and to work only then with this pre-allocated memory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe_t_ve got only 16 ms to do everything... so if we could avoid to clean the house meanwhile_co_ this may be a good option.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] another option would be to have better ventilated devices _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sarcastic_co_ but MacBooks are known to be really densely integrated_co_ so to warm quickly\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-24T19:32:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_121941_qt_ data-ipsquote-contentid_eq__qt_21427_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1458846300_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t42 minutes ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tinternal BJS is designed to not allocate new objects\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBJS doesn_t_t have an object pool class does it?  It could benefit from one in places like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/2f5bff64d3abfb99d5be9197c014c19b042bc9c7/src/Math/babylon.math.ts#l2171_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/2f5bff64d3abfb99d5be9197c014c19b042bc9c7/src/Math/babylon.math.ts#l2171_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-24T19:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just found the Tmp class at the end of that file.  That decompose should probably be using it. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var rotationMatrix _eq_ Tmp.Matrix[0]_sm_\n\nMatrix.FromValuesToRef(\n                this.m[0] / scale.x_co_ this.m[1] / scale.x_co_ this.m[2] / scale.x_co_ 0_co_\n                this.m[4] / scale.y_co_ this.m[5] / scale.y_co_ this.m[6] / scale.y_co_ 0_co_\n                this.m[8] / scale.z_co_ this.m[9] / scale.z_co_ this.m[10] / scale.z_co_ 0_co_\n                0_co_ 0_co_ 0_co_ 1_co_ tmpMat)_sm_\n\nQuaternion.FromRotationMatrixToRef(rotationMatrix_co_ rotation)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAn object pool class would be safer though.  It looks like it would be easy to inadvertently write to the same object from different sections of code.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-24T19:56:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep_co_ this is a good idea\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Tmp (secret) class is quite new (so not that refactored everywhere in the legacy code) and intended to share pre-allocated objects (so memory) instead of allocating temporary ones within the other class methods. It_t_s not intended to _lt_u_gt_store_lt_/u_gt_ persistent values_co_ just to re-use the memory and thus to keep the GC as quiet as possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now_co_ AFAIK_co_ the code was refactored using the Tmp class mostly in the methods usually called_co_ or supposed to be called_co_ in the render loop or generating too many temporary object allocations (world matrix computation_co_ SPS_co_ parametric shape morphings). It could of course be used more widely_co_ just a matter a time to refactor everything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis remains an internal mechanism to optimize the framework and is not really a end-user tool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-24T21:46:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI second that_dd_ Tmp is not intend to store values!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-24T22:08:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_121950_qt_ data-ipsquote-contentid_eq__qt_21427_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1458849402_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt could of course be used more widely_co_ just a matter a time to refactor everything.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis would make me nervous.  It would be easy to call a function that is using the same Tmp variable you are using.  I would feel more comfortable using something like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar tmpMat _eq_ Tmp.get(BABYLON.Matrix)_sm_  //get function would make sure you are the only one using it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//do whatever you want here\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTmp.recycle(tmpMat)_sm_  //return it to Tmp so that it can be safely used again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust my 2 cents.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2016-03-25T15:48:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey people !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see we have different points of view and approaches_co_ but it_t_s still a major topic for everyone_co_ as soon as you discover a new creative tool_co_ you quickly reach the limit and have to deal with _qt_the way how to_qt_ _co_ self-teaching takes some time but is rewarding ! Having a good teacher though_co_ make things much more efficient and fast_co_ thanks for your answers ! I hope I can become as expert as you are _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m only trying to get the right coding method before going too far ahead. I have_co_ thanks to the wonderful debug layer_co_ realized that FPS is BIG TIME impacted by shadows !!!_lt_br_gt_\n\tPointLight and shadowMap at 1024 is a NO GO !!! If I disable the Shadow_co_ my scene hits 200PotentialFPS quite often_co_ when I enable it_co_ goes down to 50FPS._lt_br_gt_\n\tUsually_co_ I try to make something that can run on an iPad2/3_co_ it is my _qt_standard_qt_. But its too limited so I also make more demanding scenes. The MacbookPro Retina full specd is amazingly fast and silent ! It is ME that is to blame_co_ not the computer _sm_-) \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt__gt_@Deltakosh_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt__gt_@jerome_lt_/a_gt_ I have only _qt_heard of_qt_ garbage collection ... I think I get what it is about more or less ... I_t_m willing to use the BABYLON.JS framework with its multimedia properties_co_ MP3 sounds_co_ WEBM videos_co_ lots of meshes got from .babylon files. They are often big sized and not necessary at startup. Do you mean that MP3 or WEBM files or assets_co_ should all be loaded and created before runRenderLoop ??? Its not as if I was trying to make a MMORPG_co_ but I thought it would somehow be possible with BJS &gt_sm__&lt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-25T16:26:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe fans usually run because of the gpu_co_ not the cpu (of course this is a very generalized statement). Unless you run very heavy computations every frame_co_ I doubt the cpu is the reason for that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGpu gets hot. On your computer_co_ on your smartphone. Think about the amount of computations required to render one frame_co_ and multiply it times 60 per second. It_t_s working hard... Let the fans run_co_ they only do their job ☺\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course optimizing the computations will help. Using simpler shaders will help. But there is usually no way to avoid gpu heating when rendering a 3D scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-25T16:46:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFan speed is only avoidable with either a water cooled tower or fan-less tablet.  Shifting noise from the cpu fan to the gpu fan is a zero sum game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe gpu fan noise usually comes with better results though.  Amdahl_t_s law dictates that the % of time spent in single threading drastically limits throughput.  Suggest you try to limit the overhead of cpu during render loop.  See you discovered the debug layer_co_ so you should be able to measure the effects of these tips_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tindicate freezeWorldMatrix on all meshes_co_ which are background &amp_sm_ never move.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tindicate checkOnlyOnce on materials.  If it does not screw up everything_co_ keep it that way.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tmerge meshes of the same material_co_ as long as you are not running animations or setting other properties independently  on them.\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2016-03-25T18:26:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tlol The fans getting on at very fast pace is just a sign that something very intensive is going on_co_ a basic scene shouldn_t_t be something intensive for my computer_co_ but it_t_s my mistake of course. This is not really a topic about cooling system issues though... It_t_s just that some scenes tend to be better than others_co_ and looking at the _lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/Sponza/_qt_ rel_eq__qt_external nofollow_qt__gt_Sponza Demo_lt_/a_gt__co_ I_t_m looking for ways to achieve something THAT optimized (thus doesn_t_t turn the fans of the PC on)... Just to give you an example _dd_ it is acceptable that the fans starts to run at fast pace when I export a .babylon file from a complex Blender scene_co_ the task can take some time and it computes the stuff at full speed_co_ okay_co_ but I can_t_t accept the same kind of _qt_heating_qt_ when my scene is rendered realtime_co_ it kinds of ruins the experience IMHO. This this achievable_co_ I_t_m sure _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_. I_t_m trying to get as much info I can. I already use LevelOfDetail_co_ and other stuff from the tutorials. They are great by the way.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122058_qt_ data-ipsquote-contentid_eq__qt_21427_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1458924363_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tthese tips_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_ul_gt__lt_li_gt_\n\t\t\t\tindicate freezeWorldMatrix on all meshes_co_ which are background &amp_sm_ never move.\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tindicate checkOnlyOnce on materials.  If it does not screw up everything_co_ keep it that way.\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tmerge meshes of the same material_co_ as long as you are not running animations or setting other properties independently  on them.\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt__lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThx for the tips_co_ I_t_ll review and check the difference it makes _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpeaking of CPU_co_ I personally englobe CPU and GPU in the term _qt_CPU_qt__co_ as few people have proper dedicated one_co_ to mention the overall computations. It_t_s because I come from the audio world_co_ where CPU is the gauge _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt__gt_ My mistake.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-03-28T12:42:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor the checkOnlyOnce flag on material_co_ we have markDirty() to notify a change for one render loop_co_ is there a similar method for mesh with freezeWorldMatrix ? That could be super usefull.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-28T12:59:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tactually_co_ the method is _lt_em_gt_material.freeze()_lt_/em_gt_ _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.material.ts#L184_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.material.ts#L184_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-28T14:16:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122448_qt_ data-ipsquote-contentid_eq__qt_21427_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459168977_qt_ data-ipsquote-userid_eq__qt_6528_qt_ data-ipsquote-username_eq__qt_Vousk-prod._qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Vousk-prod. said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFor the checkOnlyOnce flag on material_co_ we have markDirty() to notify a change for one render loop_co_ is there a similar method for mesh with freezeWorldMatrix ? That could be super usefull.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHave not looked at that code recently_co_ but one of these should work_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tCall freezeWorldMatrix() again.  It calls computeWorldMatrix() one last time to ensure it was called at least once.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tCall computeWorldMatrix(true).  The force parameter should _qt_force it_qt_ without changing the frozen state.\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-03-29T20:19:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122450_qt_ data-ipsquote-contentid_eq__qt_21427_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459169964_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 28/03/2016 at 2_dd_59 PM_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tactually_co_ the method is _lt_em_gt_material.freeze()_lt_/em_gt_ _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.material.ts#L184_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.material.ts#L184_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s right. Thanks.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122459_qt_ data-ipsquote-contentid_eq__qt_21427_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459174596_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 28/03/2016 at 4_dd_16 PM_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHave not looked at that code recently_co_ but one of these should work_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_ol_gt__lt_li_gt_\n\t\t\t\tCall freezeWorldMatrix() again.  It calls computeWorldMatrix() one last time to ensure it was called at least once.\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tCall computeWorldMatrix(true).  The force parameter should _qt_force it_qt_ without changing the frozen state.\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ol_gt__lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSolution 1 works perfectly. Thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]