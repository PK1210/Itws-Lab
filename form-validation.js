// Return true if input is valid
//var test="";
//if(validateUsername(test))
//	console.log("passed");
//else
//	console.log("failed");
function validateUsername(name) {
	// Length of username should be between 4 to 8
	// It should not contain any whitespace
	if(name.length<4 || name.length>8)
		return false;
	for(var i=0;i<name.length;i++)
		if(name[i]===' ')
			return false;
	return true;
}

function validatePassword(passwrd) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
	// URL: https://account.cern.ch/account/Help/?kbid=020040
	var count=0;
	for(j=0;j<passwrd.length;j++)
		if(passwrd[j]<='Z' && passwrd[j]>='A')
		{
			count++;
			break;
		}
	for(j=0;j<passwrd.length;j++)
		if(passwrd[j]<='z' && passwrd[j]>='a')
		{
			count++;
			break;
		}
	for(j=0;j<passwrd.length;j++)
		if(passwrd[j]<='9' && passwrd[j]>='0')
		{
			count++;
			break;
		}
	var word= "~!@#$%^&*_-+=`|\(){}[]:;\"'<>,.?/";
	for(j=0;j<passwrd.length;j++)
			for(k=0;k<word.length();k++)
				if(passwrd[j]===word[i][k])
				{
					count++;
					break;
				}
	if(count==4)
		return true;
	else
		return false;

}

function validateCountry(country) {
	// Check if any country is selected
	// Check if country belong to given list: [AF, AL, DZ, AS, AD]
	var word=[];

	word.push(AF, AL, DZ, AS, AD);
	for(i=0;i<5;i++)
		if(word[i]===country)
			return true;
	return false;
}

function validateEmail(email) {
	// Check if the email is valid
	var count=0,pos;
	for(i=0;i<email.length();i++)
		if(email[j]==='@')
			count++;
	if(count!=1)
		return false;
	for(i=0;i<email.length();i++)
                if(email[j]==='@')
                        pos=j;
	if(j===0 || j===email.length()-1)
		return false;
	for(i=0;i<email.length();i++)
                if(email[j]==='.')
                        count++;
	if(count!=1)
		return false;
	for(i=0;i<email.length();i++)
                if(email[j]==='@')
                        count=j;
	if(count<=pos+1)
		return false;
	return  true;
}

function validateGender(gender) {
	// Check if any one of radio button is selected
	if(gender==="Male" || gender==="Female")
		return true;
	else
		return false;
}

function validateLanguage(lang) {
	// lang -> list of langs selected
	// Check if atleast one of the checkbox is checked
	
}
