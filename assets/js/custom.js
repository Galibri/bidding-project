/**
 * Project: Cover letter generator for Upwork, Fiverr, PPH, Freelancer and Guru.
 * Author: Asadullah Al Galib
 * Framework: Vanilla JS
 * Last update: 07-01-2019
 */

"use strict";
// Asign the Node elements from the form element
const have_header_word = document.querySelector('#have-header-word');
const have_questions = document.querySelector('#have-questions');
const have_ps = document.querySelector('#incoude-ps');
const cta_value = document.querySelector('#cta');

//Global value if anything to ask the client
let client_questions = '';

// If client ask to put any words in the header
have_header_word.addEventListener('change', function(e) {
    const header_words = document.querySelector('#header-word');

    if(this.checked) {
        header_words.style.display = "block";
        header_words.addEventListener('blur', (e) => {
            document.querySelector('#start-words').innerHTML = e.target.value;
        })

    } else {
        header_words.value = '';
        header_words.style.display = "none";
        document.querySelector('#start-words').innerHTML = '';
    }
})

// Project type selection
const project_type = document.querySelector('#project-type');
project_type.addEventListener('change', function(e) {
    let project_value = this.value;
    let input_project_value = document.querySelector('#input-project-value');
    let client_needs = document.querySelector('#clients-needs');
    let pure_questions = document.querySelector('#client-question');
    let innerMainText;
    switch(project_value) {
        case 'develop':
            innerMainText = "You are looking to develop a brand new webstie for _________. You are looking for someone who can take your website from concept to production within your timeframe.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative WordPress Developer who build websites from scratch, so I might be able to help you too.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'needdeveloper':
            innerMainText = "You need a WordPress developer with experience building awesome websites. You need someone who can take your website from concept to launch in strict timeframe.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative WordPress Developer who build websites from scratch, so I might be able to help you too.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'redesign':
            innerMainText = "You are looking to redesign your existing website with new look and feel that will engage visitors. You need your website to be unique and modern.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative WordPress Developer who build websites from scratch, so I might be able to help you too.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'edit':
            innerMainText = "You are looking for a developer to tweak your website. Your description is good enough to complete the task for me.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative WordPress Developer and I will assist you to tweat the changes you have wanted.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'theme':
            innerMainText = "You need a WordPress theme developer to develop your theme with the latest trends and security. You are after someone who will make the unique theme within the timeframe.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative WordPress Developer who build websites from scratch, so I am confident to develop your theme.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'plugin':
            innerMainText = "You need a WordPress plugin developer to develop the plugin for __________. You are after someone who will ensure the security and will deliver within timeframe.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative WordPress Developer who build websites from scratch, so I am confident to develop your plugin.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'psdtohtml':
            innerMainText = "You are looking for a designer with the skill of development who will convert your PSD to HTML using BootStrap 4. You are looking for someone who will take care of mobile version too.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative frontend Developer who build websites from scratch, so I am confident to deliver the project within the timeframe.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'psdtowp':
            innerMainText = "You need a web developer with design skills to convert your PSD files into an interactive WordPress theme. You are looking for someone who will ensure the security and will take care of pixel perfect design using Drag and Drop builder.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative fullstack WordPress Developer who build websites from scratch. I am looking for the opportunity to convert your PSD to WordPress theme using the latest practice.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'htmltowp':
            innerMainText = "You need a web developer to convert your HTML files into an interactive WordPress theme. You are looking for someone who will ensure the security and will take care of pixel perfect design using Drag and Drop builder.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a creative frontend Developer who build websites from scratch, so I am confident to deliver the project within the timeframe.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        case 'updatewebsite':
            innerMainText = "You need to upgrade your WordPress website to the latest version. You need someone who will carefully upgrade the website without breaking anything.";
            input_project_value.style.display = "block";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            input_project_value.addEventListener('blur', (e) => {
                client_needs.innerHTML = input_project_value.value;
            })
            pure_questions.innerHTML = "Great! I’m a WordPress Developer who know ins and outs of WordPress technology, so I can help you to upgrade your website.";
            client_questions = document.querySelector('#client-question').innerText;
        break;

        default:
            innerMainText = "";
            input_project_value.innerHTML = innerMainText;
            client_needs.innerHTML = innerMainText;
            pure_questions.innerHTML = innerMainText;
            client_questions = innerMainText;
            input_project_value.style.display = "none";
        break;

    }
})

// Handle if want to add questions
have_questions.addEventListener('change', function(e) {
    let client_questions_q = document.querySelector('#questions')
    if(this.checked) {
        client_questions_q.style.display = "block";
        document.querySelector('#client-question').innerHTML = client_questions_q.value.replace(/\r?\n/g, '<br />');
        client_questions_q.addEventListener('blur', (e) => {
            let innerText = e.target.value;
            innerText = innerText.replace(/\r?\n/g, '<br />');
            document.querySelector('#client-question').innerHTML = innerText;
        })
    } else {
        client_questions_q.style.display = "none";
        document.querySelector('#client-question').innerHTML = client_questions;
    }
})

// Add call to action in the cover letter
cta_value.addEventListener('change', function(e) {
    document.querySelector('.client-cta').innerHTML = this.value;
})

// Handle P.S info
have_ps.addEventListener('change', function(e) {
    const psinfo = document.querySelector('#psinfo');
    if(this.checked) {
        psinfo.style.display = "block";
        psinfo.addEventListener('change', function(e) {
            if(this.value != '') {
                document.querySelector('#client-ps').innerHTML = 'P.S: ' + this.value;
            } else {
                document.querySelector('#client-ps').innerHTML = '';
            }
        })
    } else {
        psinfo.style.display = "none";
        psinfo.value = '';
        document.querySelector('#client-ps').innerHTML = '';
    }
})

// Copy text functionalities
const copy_div = document.querySelector('#copy-text');
let buildText = "";

copy_div.addEventListener('click', function(e) {
    let childrens = document.querySelector('.bidding-body').children;
    let childArray = [...childrens];
    childArray.forEach( item => {
        if(item.outerText) {
            buildText += item.outerText + "\r\n";
        }
    })
    

    const input = document.createElement('textarea');
    input.className = "gw_textarea";
    input.style.position = 'absolute';
    input.style.left = '-20000px';
    document.querySelector('body').appendChild(input);
    input.innerHTML = buildText;
    input.focus();
    input.select();
    try {
        let successful = document.execCommand('copy');
        if(successful) {
            let successmsg = document.createElement('div');
            successmsg.className = "alert alert-success alert-dismissible";
            successmsg.innerHTML = "Proposal copied!";
            let closebtn = document.createElement('button');
            closebtn.setAttribute('type', 'button');
            closebtn.setAttribute('data-dismiss', 'alert');
            closebtn.className = 'close';
            closebtn.innerHTML = "&times;";
            successmsg.appendChild(closebtn);
            let mainDivSuccess = document.querySelector('.success-msg');
            mainDivSuccess.innerHTML = '';
            mainDivSuccess.appendChild(successmsg)

            let toBeRemoved = document.querySelector('.gw_textarea');
            buildText = '';
            toBeRemoved.parentNode.removeChild(toBeRemoved);

            setTimeout(function() {
                mainDivSuccess.innerHTML = '';
            }, 2000)
        }
    } catch (err) {
        alert("Can not copy");
    }
})