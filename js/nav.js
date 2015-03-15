//Dynamically insert menu
var $target = document.querySelector('#menuHeader');
var $ul = document.createElement('ul');
var $li = document.createElement('li');

$ul.innerHTML = ('Home').setAttribute{"id": "menuHeader",  "class": "home"};
$ul.innerHTML = ('Services');

$li.innerHTML = ('<a href="#">Individual Therapy></a>');
$li.innerHTML = ('<a href="#">Couple Therapy</a>');
$li.innerHTML = ('<a href="#">Family Therapy</a>');
$li.innerHTML = ('<a href="#">Group Therapy</a>');
$li.innerHTML = ('<a href="#">Massage Therapy</a>');
$li.innerHTML = ('<a href="#">Expressive Arts Therapy</a>');
$li.innerHTML = ('<a href="#">Play Therapy</a></li>');
$li.innerHTML = ('<a href="#">Integrative Health Coaching</a></li>');

$ul.innerHTML = ('Practitioners');

$li.innerHTML = ('<a href="ariel.html">Ariel Givens</a>');
$li.innerHTML = ('<a href="darcie.html">Darcie Taggart</a>');
$li.innerHTML = ('<a href="deb.html">Deb Ogburn</a>');
$li.innerHTML = ('<a href="angie.html">Health Coach Angie</a>');
$li.innerHTML = ('<a href="jennifer.html">Jennifer Beasley</a>');
$li.innerHTML = ('<a href="jill.html">Jill Morgan</a>');
$li.innerHTML = ('<a href="nancy.html">Nancy Givens</a></li>');

$ul.innerHTML = ('Contact').setAttribute();

//<li id="menuHeader" class="home"><a href="index.html">Home</a></li>
//        <li id="menuHeader" id="services"><a href="#">Services</a>
//          <ul>
//            <li><a href="#">Individual Therapy</a></li>
//            <li><a href="#">Couple Therapy</a></li>
//            <li><a href="#">Family Therapy</a></li>
//            <li><a href="#">Group Therapy</a></li>
//            <li><a href="#">Massage Therapy</a></li>
//            <li><a href="#">Expressive Arts Therapy</a></li>
//            <li><a href="#">Expressive Arts Coaching</a></li>
//            <li><a href="#">Play Therapy</a></li>
//            <li><a href="#">Integrative Health Coaching</a></li>
//          </ul>
//        </li>
//        <li id="menuHeader" id="practitioners"><a href="#">Practitioners</a>
//          <ul>
//            <li><a href="ariel.html">Ariel Givens</a></li>
//            <li><a href="darcie.html">Darcie Taggart</a></li>
//            <li><a href="deb.html">Deb Ogburn</a></li>
//            <li><a href="angie.html">Health Coach Angie</a></li>
//            <li><a href="jennifer.html">Jennifer Beasley</a></li>
//            <li><a href="jill.html">Jill Morgan</a></li>
//            <li><a href="nancy.html">Nancy Givens</a></li>
//          </ul>
//        </li>
//        <li id="menuHeader" class="contact"><a href="contact.html">Contact</a></li>