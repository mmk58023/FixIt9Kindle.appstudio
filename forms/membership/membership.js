let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
 
btnSubmit2.onclick=function(){
 let inptMember = inptFirstName.value
  if ((inptMember == 'Mary') || (inptMember == 'Sam') || (inptMember == "Joey") || (inptMember == "Paul") || (inptMember == "Mike") || (inptMember == "Char") || (inptMember == "Jenny") || (inptMember == "Kennedy") || (inptMember == "Kaden") || (inptMember == "Kurt") || (inptMember == "Anne")) {
    NSB.MsgBox("That login has been recognised. Membership confirmed!")
} else {
    members.push(inptMember)
    NSB.MsgBox("That login is not recognised.You have been added as a member!")
        console.log(members)
        inptFirstName.value = "" 
}
}

btnChangeForm2.onclick=function() {
  ChangeForm(calculator)
}