//originalCmt stores the comments received from end customers (Its customers actual comment)
var originalCmt = fields.get('q_aa_wheelchair_cmt');
//profanityFreeComment stores profanity free comment calling removeProfanity()
var profanityFreeComment = removeProfanity(originalCmt);
//Stores the profanityFreeComment in the new Qfield
fields.set('q_aa_wheelchair_comment_profanity_free', profanityFreeComment);

//function to remove profanity words from the string
function removeProfanity(inputComment) {
  var slangRegex = /androgynous|aryan|Asian|\bass\b|assfuck|asshole|ballsack|bastard|bigot|bimbo|bitch|biatch|blow job|boner|boobs|bullshit|chink|chubby|clit|\bcock\b|cocksucker|\bcoon\b|crackwhore|\bcum\b|\bcunt\b|damn|dick|dildo|dipshit|douche|dyke|\bfag\b|fagot|faggot|\bfat\b|fired|fuck|fuk|gay|ghetto|goddamn|gringo|\bhomo\b|hooters|hotmess|idiot|Indian|japs|jizz|kike|KKK|klan|kooch|lesbian|lesbo|moron|\bnads\b|nappy|nazi|n1gga|nigga|nigger|niglet|nutsack|obese|overweight|penis|prick|pussy|racist|\brape\b|retard|schlong|shemale|shit|skank|slut|spick|tits|titties|twat|ugly|unattractive|vagina|wang|weiner|wench|whore|wigger|African American|African-American|black people|broken english|fudge packer|screw me|screw you|son of a bitch|white people|you suck |\bkoon\b|fire|firing|jap|obesity|pussies|raping|fucker|fucking|suck|asses|assed|AfricanAmerica|African America|African\/American|African anerican|screwedme|screwingme|screw-me|screw us|screwed us|screwing us|raped|rapes|hot-mess|hot mess|boob|boobies|cunts|titty|fags|rasist|blowjob|shoot|shooting|gun|ammo|tragedy|dumbass|FLL|LGBT|blow-job/ig;
  var govLawRegex = /NRA|Second amendment|2nd amendment|National Rifle Association|Abortion|Planned Parenthood/ig;
  //If inputComment is NULL or blank then return blank
  if (inputComment == null || inputComment == '') {
    return '';
  }
  //Creating string profanityFreeCmt
  var profanityFreeCmt = new String(inputComment);
  //Replacing the profanity words in comment with "******"
  profanityFreeCmt = profanityFreeCmt.replace(slangRegex, '******');
  profanityFreeCmt = profanityFreeCmt.replace(govLawRegex, '******');
  return profanityFreeCmt;
}
true;



/* Version 2 */
//originalCmt stores the comments received from end customers (Its customers actual comment)
var originalCmt = fields.get('q_aa_wheelchair_cmt');
//profanityFreeComment stores profanity free comment calling removeProfanity()
var profanityFreeComment = removeProfanity(originalCmt);
//Stores the profanityFreeComment in the new Qfield
fields.set('q_aa_wheelchair_comment_profanity_free', profanityFreeComment);

//function to remove profanity words from the string
function removeProfanity(inputComment) {
  //If inputComment is NULL or blank then return blank
  if (inputComment == null || inputComment == '') {
    return '';
  }
  //Creating string profanityFreeCmt
  var profanityFreeCmt = new String(inputComment);
  //Replacing the profanity words in comment with "******"
  profanityFreeCmt = profanityFreeCmt.replace(/androgynous|aryan|Asian|\bass\b|assfuck|asshole|ballsack|bastard|bigot|bimbo|bitch|biatch|blow job|boner|boobs|bullshit|chink|chubby|clit|\bcock\b|cocksucker|\bcoon\b|crackwhore|\bcum\b|\bcunt\b|damn|dick|dildo|dipshit|douche|dyke|\bfag\b|fagot|faggot|\bfat\b|fired|fuck|fuk|gay|ghetto|goddamn|gringo|\bhomo\b|hooters|hotmess|idiot|Indian|japs|jizz|kike|KKK|klan|kooch|lesbian|lesbo|moron|\bnads\b|nappy|nazi|n1gga|nigga|nigger|niglet|nutsack|obese|overweight|penis|prick|pussy|racist|\brape\b|retard|schlong|shemale|shit|skank|slut|spick|tits|titties|twat|ugly|unattractive|vagina|wang|weiner|wench|whore|wigger|African American|African-American|black people|broken english|fudge packer|screw me|screw you|son of a bitch|white people|you suck |\bkoon\b|fire|firing|jap|obesity|pussies|raping|fucker|fucking|suck|asses|assed|AfricanAmerica|African America|African\/American|African anerican|screwedme|screwingme|screw-me|screw us|screwed us|screwing us|raped|rapes|hot-mess|hot mess|boob|boobies|cunts|titty|fags|rasist|blowjob|shoot|shooting|gun|ammo|tragedy|dumbass|FLL|LGBT|blow-job/ig, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/NRA|Second amendment|2nd amendment|National Rifle Association|Abortion|Planned Parenthood/ig, '******');
  return profanityFreeCmt;
}
true;


/*Version 3*/
//originalCmt stores the comments received from end customers (Its customers actual comment)
var originalCmt = fields.get('q_aa_wheelchair_cmt');
//profanityFreeComment stores profanity free comment calling removeProfanity()
var profanityFreeComment = removeProfanity(originalCmt);
//Stores the profanityFreeComment in the new Qfield
fields.set('q_aa_wheelchair_comment_profanity_free', profanityFreeComment);

//function to remove profanity words from the string
function removeProfanity(originalCmt) {
  //If originalCmt is NULL or blank then return blank
  if (originalCmt == null || originalCmt == '') {
    return '';
  }
  //Creating string profanityFreeCmt
  var profanityFreeCmt = new String(originalCmt);
  //Replacing the profanity words in comment with "******"
  profanityFreeCmt = profanityFreeCmt.replace(/\bandrogynous\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\baryan\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\basian\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bass\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bassfuck\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\basshole\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bballsack\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bbastard\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bbigot\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bbimbo\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bbitch\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bbiatch\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bblow job\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bboner\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bboobs\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bbullshit\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bchink\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bchubby\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bclit\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bcock\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bcocksucker\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bcoon\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bcrackwhore\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bcum\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bcunt\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bdamn\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bdick\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bdildo\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bdipshit\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bdouche\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bdyke\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfag\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfagot\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfaggot\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfat\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfired\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfuck\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfuk\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bgay\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bghetto\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bgoddamn\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bgringo\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bhomo\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bhooters\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bhotmess\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bidiot\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bindian\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bjaps\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bjizz\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bkike\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bkkk\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bklan\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bkooch\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\blesbian\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\blesbo\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bmoron\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnads\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnappy\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnazi\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bn1gga\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnigga\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnigger\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bniglet\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnutsack\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bobese\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\boverweight\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bpenis\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bprick\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bpussy\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bracist\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\brape\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bretard\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bschlong\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bshemale\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bshit\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bskank\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bslut\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bspick\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\btits\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\btitties\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\btwat\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bugly\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bunattractive\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bvagina\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bwang\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bweiner\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bwench\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bwhore\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bwigger\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bafrican american\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bafrican-american\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bblack people\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bbroken english\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfudge packer\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrew me\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrew you\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bson of a bitch\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bwhite people\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\byou suck \b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bkoon\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfire\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfiring\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bjap\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bobesity\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bpussies\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\braping\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfucker\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfucking\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bsuck\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\basses\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bassed\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bafricanamerica\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bafrican america\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bafrican\/american\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bafrican anerican\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrewedme\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrewingme\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrew-me\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrew us\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrewed us\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bscrewing us\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\braped\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\brapes\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bhot-mess\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bhot mess\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bboob\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bboobies\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bcunts\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\btitty\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfags\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\brasist\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bblowjob\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bshoot\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bshooting\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bgun\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bammo\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\btragedy\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bdumbass\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bfll\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\blgbt\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bblow-job\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnra\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bsecond amendment\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\b2nd amendment\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bnational rifle association\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\babortion\b/gi, '******');
  profanityFreeCmt = profanityFreeCmt.replace(/\bplanned parenthood\b/gi, '******');
  return profanityFreeCmt;
}
true;

/* Backup */
var profanityWords = "androgynous|aryan|asian|ass|assfuck|asshole|ballsack|bastard|bigot|bimbo|bitch|biatch|blow job|boner|boobs|bullshit|chink|chubby|clit|cock|cocksucker|coon|crackwhore|cum|cunt|damn|dick|dildo|dipshit|douche|dyke|fag|fagot|faggot|fat|fired|fuck|fuk|gay|ghetto|goddamn|gringo|homo|hooters|hotmess|idiot|indian|japs|jizz|kike|kkk|klan|kooch|lesbian|lesbo|moron|nads|nappy|nazi|n1gga|nigga|nigger|niglet|nutsack|obese|overweight|penis|prick|pussy|racist|rape|retard|schlong|shemale|shit|skank|slut|spick|tits|titties|twat|ugly|unattractive|vagina|wang|weiner|wench|whore|wigger|african american|african-american|black people|broken english|fudge packer|screw me|screw you|son of a bitch|white people|you suck |koon|fire|firing|jap|obesity|pussies|raping|fucker|fucking|suck|asses|assed|africanamerica|african america|african\/american|african anerican|screwedme|screwingme|screw-me|screw us|screwed us|screwing us|raped|rapes|hot-mess|hot mess|boob|boobies|cunts|titty|fags|rasist|blowjob|shoot|shooting|gun|ammo|tragedy|dumbass|fll|lgbt|blow-job|nra|second amendment|2nd amendment|national rifle association|abortion|planned parenthood";