<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Project Check-in</title>
	<link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="FormCSS.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</head>

<body>
    <center><img src="" style="width: 100%"></center>
    <p class="font" style="text-align: center; font-size: 50px; width: 100%;">Participant check-in</p>
    
    <div id = "SignInForm">
        <div class="box">
            <p>First Name*</p>
            <input class="font" type = "text" placeholder="Enter your First name here." id="firstName">
            </div>
        <br>

        <div class="box">
            <p>Last Name*</p>
            <input class="font" type = "text" placeholder="Enter your Last name here." id="lastName">
        </div>
        <br>

        <div class="box">
            <p>Age Range*</p>
            <form action="" class="formsClass">
                <input class="forms" type = "radio" id="ageRange" name="ageRange" value="Below 18"> Below 18 <br>
                <input class="forms" type = "radio" id="ageRange" name="ageRange" value="18 - 25"> 18 - 25 <br>
                <input class="forms" type = "radio" id="ageRange" name="ageRange" value="25 - 35"> 25 - 35 <br>
                <input class="forms" type = "radio" id="ageRange" name="ageRange" value="35 - 50"> 35 - 50 <br>
                <input class="forms" type = "radio" id="ageRange" name="ageRange" value="50 - 60"> 50 - 60 <br>
                <input class="forms" type = "radio" id="ageRange" name="ageRange" value="60+"> 60+ <br>
            </form>
        </div>
        <br>
        
        <div class="box">
            <p>Did you bring children?*</p>
            <form action="" class="formsClass">
                <input class="forms" type="radio" id="childrenPresent" name="childrenPresent" value="Yes"> Yes <br>
                <input class="forms" type="radio" id="childrenPresent" name="childrenPresent" value="No"> No <br>
            </form>
        </div>
        <br>
        
        <div class="box">
            <p>If so, how many?</p>
            <input class="font" type ="text" placeholder="Answer here." id="numberOfChildren">
        </div>
        <br>

        <div class="box">
            <p>Do you need medical attention?*</p>
            <form action="" class="formsClass">
                    <input class="forms" type="radio" id="medicalAttention" name="medicalAttention" value="Yes"> Yes <br>
                    <input class="forms" type="radio" id="medicalAttention" name="medicalAttention" value="No"> No <br>
            </form>
        </div>
        <br>

        <div class="box">
            <p>Do you plan on returning?*</p>
            <form action="" class="formsClass">
                    <input class="forms" type="radio" id="patientReturnPossability" name="patientReturnPossability" value="Yes"> Yes <br>
                    <input class="forms" type="radio" id="patientReturnPossability" name="patientReturnPossability" value="No"> No <br>
            </form>
        </div>
        <br>
        
        <div class="box">
            <p>Where did you sleep last night(street)?*</p>
            <input class="font" type="text" id="streetSleptOnNightBefore" name="streetSleptOnNightBefore" placeholder="Enter street here.">
        </div>
        <br>

        <div class="box">
            <p>Are you looking for a job?*</p>
            <form action="" class="formsClass">
                    <input class="forms" type="radio" id="seekingEmployment" name="seekingEmployment" value="Yes"> Yes <br>
                    <input class="forms" type="radio" id="seekingEmployment" name="seekingEmployment" value="No"> No <br>
            </form>
        </div>
        <br>

        <div class="box">
            <p>What kind of jobs are you looking for?</p>
            <form action="" class="formsClass">
                <input class="forms" type="checkbox" id="jobTypesSeeking" name="jobTypesSeeking" value="Retail"> Retail <br>
                <input class="forms" type="checkbox" id="jobTypesSeeking" name="jobTypesSeeking" value="Janitor"> Janitor <br>
                <input class="forms" type="checkbox" id="jobTypesSeeking" name="jobTypesSeeking" value="Delivery"> Delivery <br>
                <input class="forms" type="checkbox" id="jobTypesSeeking" name="jobTypesSeeking" value="Restaurant"> Restaurant <br>
                <input class="forms" type="checkbox" id="jobTypesSeeking" name="jobTypesSeeking" value="Other"> Other <br>
            </form>
        </div>
        <button onclick="submitResponse()">Submit</button>
    </div>



    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js"></script>
    <script src="/__/firebase/init.js"></script>
    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-firestore.js"></script>

 
<script src="config.js"></script>
<script src="index.js"></script>

</body>

</html>
