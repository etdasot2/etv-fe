import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "global": {
                "copySuccess": "Copied",
                "days": "Days",
                "insufficientBalance": "Insufficient balance",
                "wait48hrs": "Please wait 48 hours after changing funds password to withdraw",
                "pleaseEnter": "Please enter",
                "save": "Save",
                "ok": "OK",
                "error": {
                    "invalidCode": "Invalid verification code",
                    "tryAgain": "Something went wrong, try again later",
                },
                "saved": "Saved",
                "day": "Day",
                "change": "Change",
                "from": "From",
                "to": "To",
                "analyze": "Analyze",
                "total": "Total",
                "loading": "Loading",
                "free": "Free",
                "ongoingWithdrawal": "Only one withdrawal can be processed at a time",
                "waitAfterSuccessWithdraw": "Subsequent withdrawal requests must be made 24 hours post-completion of the preceding withdrawal",
                "waitAfterCanceledWithdraw": "Please wait 24 hours after canceling a withdrawal before requesting another",
                "todaysEarnings": "Today's Earnings",
                "cumulativeEarnings": "Cumulative Earnings",
                "myLevel": "My level",
                "upgrade": "Upgrade",
                "success": "success",
                "stayTuned": "Stay tuned",
                "months": {
                    "mar": "Mar",
                    "apr": "Apr",
                    "may": "May",
                    "jun": "Jun",
                    "jul": "Jul",
                    "aug": "Aug",
                    "sep": "Sep",
                    "oct": "Oct",
                    "nov": "Nov",
                    "dec": "Dec"
                },
                "people":"People",
                "views":"Views",
                "dontRepeat":"Please do not repeat the request",
                "sending":"Sending"
            },
            "common": {
                "errorOccurred": "An error occurred"
            },
            "bottomBar": {
                "home": "Home",
                "team": "Team",
                "revenue": "Revenue",
                "record": "Music",
                "mine": "Mine"
            },
            "home": {
                "viral": "Shorts",
                "tredningNow": "Popular movies",
                "seeMore": "See more",
                "aboutUs": "about us",
                "help": "help",
                "missionCenter": "mission center",
                "bonusDescription": "Bonus description",
                "socialMedia": "Social Media",
                "joinUs": "Join the official Eternova Films Telegram group and receive 1 USDT as a reward.",
                "leader": "Eternova Films City Partner",
                "home": "Home",
                "forYou": "For You",
                "inviteFriends": "Invite friends",
                "inviteFriendsText": "Invite friends to earn income",

                "annoucments": [
                    "Welcome to Eternova Films! Create, share, and earn from your short videos."
                ],
            },
            "about": {
                "title": "About the Company"
            },
            "notices": {
                "title": "Notices",
                "translation": {
                    "eternovafilms_open": {
                        "title": "Welcome to Eternova Films",
                        "content": "We're excited to have you join our community. Eternova Films is more than just a platform—it's a stage where cinema, music, and creativity shine together. Here you'll discover powerful stories, unforgettable performances, and opportunities to grow alongside a global audience of dreamers and creators. Whether you're here to enjoy films, explore music, or take part in new ventures, your journey starts now. Thank you for stepping into this world with us—together we're building something timeless. Join the official Telegram group and claim your 1 USDT reward today!"
                    },
                }
            },
            "help": {
  "title": "Help Center",
  "translation": {
    "how_to_recharge": {
      "title": "How to Recharge",
      "content": "Open 'Mine' on the bottom bar. Go to 'Recharge & Withdraw' → 'Recharge'. Choose your currency and mainnet, then copy the deposit address."
    },
    "how_to_do_task_movie": {
      "title": "How to Do a Movie Task",
      "content": "Open 'Revenue'. Find your package, tap 'Score' to collect income, pick a video, then like it."
    },
    "how_to_do_task_music": {
      "title": "How to Do a Music Task",
      "content": "Open 'Music'. Find your package, tap 'Score' to collect income, pick a video, then like it."
    },
    "how_to_withdraw": {
      "title": "How to Withdraw",
      "content": "Open 'Mine' → 'Recharge & Withdraw' → 'Withdraw'. Select currency and mainnet, choose a saved address, enter the amount, tap 'Confirm Withdrawal', then verify with your funding password."
    },
    "how_to_invite_friends": {
      "title": "How to Invite Friends",
      "content": "Go to 'Team' → 'Invite Friend'. Tap 'Copy' to copy your invitation code."
    },
    "how_to_register": {
      "title": "How to Register",
      "content": "On the registration page: enter username and email, select your phone country code, enter your phone number, create and confirm a password, add the invitation code, then tap the 'Register' arrow."
    },
    "how_to_purchase_package_long": {
      "title": "How to Purchase a Package (Long Video Section)",
      "content": "Open 'VIP', choose a package, then tap 'Unlock Now'."
    },
    "how_to_purchase_package_shorts": {
      "title": "How to Purchase a Package (Shorts Section)",
      "content": "Open 'Shorts', choose a package, then tap 'Unlock Now'."
    },
    "how_to_transfer_funds": {
      "title": "How to Transfer Funds from Recharge & Withdraw to Member Points",
      "content": "Open 'Mine' → 'Recharge & Withdraw'. Tap the transfer icon (top right), select the currency, enter the amount, then tap 'Confirm Transfer'."
    },
    "how_to_reset_password": {
      "title": "How to Reset Password",
      "content": "On the login screen, tap 'Forgot Password'. Enter your email, tap 'Get Verification Code', input the code from your email, set a new password, then tap 'OK'."
    },
    "how_to_change_password": {
      "title": "How to Change Password",
      "content": "Open 'Mine' → 'Login Password'. Enter your email, tap 'Get Verification Code', input the code, set and confirm your new password, then tap 'OK'."
    },
    "how_to_set_funding_password": {
      "title": "How to Set Funding Password",
      "content": "Open 'Mine' → 'Transaction Password'. Enter your email, tap 'Get Verification Code', input the code, set and confirm your funding password, then tap 'OK'."
    },
    "how_to_bind_withdraw_address": {
      "title": "How to Bind Withdrawal Address",
      "content": "Open 'Mine' → 'Recharge & Withdraw'. Open the address list → 'Add Address'. Select channel and mainnet, enter your withdrawal address, verify via email code, then tap 'OK'."
    },
    "how_to_protect_my_account": {
      "title": "How to Protect My Account",
      "content": "Open 'Mine' → 'User KYC'. Enter nationality and real name, choose document type, fill in the document number, upload documents, then tap 'Submit for Review'."
    }
  }
},
            "helpDetails": {
                "title": "Tutorial"
            },
            "introduction": {
                "title": "Income Explanation",
            },
            "social": {
                "title": "Eternova Films Social Media",
                "offical": "Sociam Media",
                "officalTGChannel": "Official Telegram Channel",
                "officalTGGroup": "Official Telegram Group",
                "subscribers": "subscribers",
                "join": "Join",
                "officalIG": "Official Instagram Profile",
                "follow": "Follow",
                "followers": "followers",
                "community": "Community",
                "members": "members",
                "new": "New",
                "errorRegion": "Please purchase a package to access this group."
            },
            "notification": {
                "title": "Notification",
                "types": {
                    "eventNotification": "Event Notification",
                    "walletMessage": "Wallet Message",
                    "systemNotification": "System Notification"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "Apply for withdrawal",
                        "message": "You have applied for withdrawal of USDT, please wait for approval, order number: {{order_number}}, amount: {{amount}}, handling fee: {{fee}}USDT"
                    },
                    "withdrawal_approve":{
                        "title": "Withdrawal Completed",
                        "message": "Your withdrawal has been completed, order number: {{order_number}}, amount: {{amount}}, handling fee: {{fee}}USDT"
                    }
                }
            },
            "notificationDetails": {
                "title": "Notification"
            },
            "team": {
                "title": "Team",
                "benefitAnalysis": "Benefit Analysis",
                "investmentIncome": "Investment Income",
                "teamMemberListBtn": "Team Member List",
                "inviteFriend": "Invite Friend",
                "inviteFriendInfo": "Watching movies to start earning income",
                "totalIncome": "Total user income",
                "todayIncome": "Today Income",
                "todayInc": "Today",
                "teamTotal": "Total subscription amount for the team",
                "likesIncome": "Likes Income",
                "teamIncome": "Team Income",
                "totalReturn": "Total Return",
                "totalTeamMembers": "Total Team Members",
                "addedToday": "Added Today",
                "firstGeneration": "First Generation",
                "totalMembers": "Total Members",
                "totalActiveMembers": "Active",
                "genTotalIncome": "Total Income",
                "secondGeneration": "Second Generation",
                "thirdGeneration": "Third Generation",
                "fourthGeneration": "Fourth Generation",
                "fifthGeneration": "Fifth Generation",
                "totalNumberOfFriends": "Total Number of Friends",
                "activeFriends": "Active Friends",
            },
            "myTeam": {
                "title": "Team Member List",
                "id": "ID",
                "generation": "Generation",
                "registrationDate": "Registration Date",
                "noResults":"No results",
                "noMoreResults":"No more results"
            },
            "invite": {
                "title": "Invite Friend",
                "headline": "Watching movies to start earning income",
                "invitationLink": "Invitation Link",
                "invitationCode": "Invitation Code"
            },
            "revenueMusic":{
                "title": "Music Member Center",

            },
            "revenue": {
                "title": "Member Center",
                "score": {
                    "title": "Scoring Center",
                    "type": "Type",
                    "director": "Director",
                    "introduction": "Introduction",
                    "recommendations": "Related Recommendations",
                    "categories":{
                        "upcoming_movies": "Upcoming Movie", 
                        "popular_movies": "Popular Movie",
                    },
                    "watch": "Watch"
                },
                "specialPackage": "Special Packages",
                "currentlevel": "Current level",
                "todayEarning": "Today Earning",
                "cumulativeEarning": "Cumulative Earning",
                "package": {
                    "view": "View",
                    "dailyPerView": "Daily Views",
                    "validTime": "Valid Time",
                    "perViewIncome": "Per View Income",
                    "scoreBtn": "Score to get income",
                    "openSoon": "Open soon",
                    "stayTuned": "Stay tuned",
                    "unlockNow": "Unlock now",
                    "expired": "Package expired",
                    "expiresIn": "Expires in",
                    "totalReturn": "Total Return",
                    "dailyReturn": "Daily Return"
                },
                "packageDetails": "Details",
                "packageExplain": "Packages Details",

                "buy": {
                    "modal": {
                        "text": "Please confirm that you want to complete this purchase"
                    }
                }
            },
            "record": {
                "title": "Record",
                "viewRating": "View Rating",
                "viewEarnings": "View Earnings",
                "noMoreRecords": "No more records"
            },
            "profile": {
                "ofcWeb": "Official website",
                "partner": "Eternova Films Leader mechanism",
                "officalWebsite": "Offical website link",
                "instagramAccount": "Instagram Account",
                "userKYC": "User KYC",
                "telegram": "Telegram",
                "scoreRecord": "Score record",
                "loginPasswordTab": "Login Password",
                "transactionPasswordTab": "Transaction Password",
                "notification": "Notification",
                "switchLanguage": "Switch language",
                "contactCustomerService": "Contact Customer Service",
                "appDownload": "App download",
                "logOut": "Logout",
                "rechargeAndWithdraw": "Recharge and Withdraw",
                "unreleasedPoint": "Unreleased Point",
                "memberPoint": "Member Point",
                "details": {
                    "title": "Personal information",
                    "nickname": "Nickname",
                    "enterNickname": "Enter your nickname",
                    "gender": "Gender",
                    "male": "male",
                    "female": "female",
                    "validation": {
                        "nickname": {
                            "required": "Nickname is required"
                        },
                        "telegram": {
                            "invalid": "Invalid Telegram username"
                        },
                        "whatsapp": {
                            "invalid": "Invalid WhatsApp number"
                        }
                    },
                    "updatedSuccess": "Profile updated successfully"
                },
                "kyc": {
                    "title": "Verified",
                    "errorPassport1": "Please upload the front image of the passport",
                    "errorPassport2": "Please upload a selfie holding your passport",
                    "errorID1": "Please upload the front image of your ID card",
                    "errorID2": "Please upload the back image of your ID card",
                    "errorID3": "Please upload a selfie holding your ID card",
                    "successMsg": "KYC submitted successfully for review",
                    "errorMsg": "Failed to submit KYC, please try again",
                    "inputs": {
                        "nationality": {
                            "label": "Nationality",
                            "placeholder": "Please enter nationality",
                            "validation": {
                                "required": "Nationality is required"
                            }
                        },
                        "name": {
                            "label": "Name",
                            "placeholder": "Please enter your name",
                            "validation": {
                                "required": "Name is required"
                            }
                        },
                        "documentNumber": {
                            "label": "Document number",
                            "placeholder": "Please enter the ID number",
                            "validation": {
                                "required": "Document number is required"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "Document type is required"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "Document Types",
                            "option1": "ID card",
                            "option2": "Passport",
                            "idCard": "ID card",
                            "passport": "Passport",
                        }
                    },
                    "uploadDocument": "Upload of Document",
                    "frontOfDocument": "Front of Document",
                    "backOfDocument": "Back of Document",
                    "selfieHoldingDocument": "Selfie Holding Document",
                    "actionButton": "Submit for review", 
                    "kycVerified": "Your information was reviewed and verified. Your personal details were immediately deleted. The profile is active again. Thank you for your cooperation.",
                    "alreadySubmited":"You've already submitted. Please wait for the review process to complete",
                    "underReview":"Your verification request is under review",
                    "verified":"Your KYC verification is complete. Your documents have been accepted.",
                    "rejected":"KYC verification failed. Please resubmit your documents.",
                },
                "loginPassword": {
                    "title": "Login Password",
                    "codeSent": "Verification code sent successfully",
                    "changedSuccess": "Password changed successfully",
                    "inputs": {
                        "email": {
                            "label": "Email address",
                            "placeholder": "Email"
                        },
                        "verifyCode": {
                            "label": "Verification Code",
                            "placeholder": "Please enter the verification code",
                            "sendBtn": "Send",
                            "validation": {
                                "required": "Verification code is required"
                            }
                        },
                        "newPassword": {
                            "label": "New Password",
                            "placeholder": "6-20 alphanumeric characters",
                            "validation": {
                                "required": "New password is required",
                                "min": "Password must be at least 6 characters",
                                "max": "Password cannot be longer than 20 characters"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Enter the password again to confirm",
                            "validation": {
                                "required": "Please confirm your password",
                                "oneOf": "Passwords must match"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "Funding Password",
                    "codeSent": "Verification code sent successfully",
                    "changedSuccess": "Funds password changed successfully",
                    "changedSuccessBind": "Funds password bound successfully",
                    "inputs": {
                        "email": {
                            "label": "Email address",
                            "placeholder": "Email"
                        },
                        "verifyCode": {
                            "label": "Verification Code",
                            "placeholder": "Please enter the verification code",
                            "sendBtn": "Send",
                            "validation": {
                                "required": "Verification code is required"
                            }
                        },
                        "newPassword": {
                            "label": "Funding Password",
                            "placeholder": "6-digit combination",
                            "validation": {
                                "required": "New funds password is required",
                                "matches": "Funds password must be exactly 6 digits"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Enter the password again to confirm",
                            "validation": {
                                "required": "Please confirm your password",
                                "oneOf": "Passwords must match"
                            }
                        }
                    },
                    "reminder": {
                        "title": "Warm reminder",
                        "points": {
                            "point1": "Your fund password is used for transactions, withdrawals and account security settings. It is recommended not to be consistent with the login password. The resulting account If it is stolen, this site is not responsible.",
                            "point2": "After changing the fund password, you cannot withdraw money within 48 hours"
                        }
                    }
                },
            },
            "wallet": {
                "title": "Recharge and Withdraw",
                "totalAssets": "Total Assets",
                "recharge": "Recharge",
                "withdraw": "Withdraw",
                "transfer": "Transfer",
                "assetDetails": "Asset Details",
                "cancelWithdrawal":"Cancel withdrawal",
                "addresses":"Address",
                "filters": {
                    "all": "All",
                    "recharge": "Recharge",
                    "transfer": "Transfer",
                    "withdraw": "Withdraw",
                    "levelPurchase": "Level Purchase",
                    "taskReward": "Task Reward",
                    "teamCommission": "Team Commission",
                    "bonus": "Bonus",
                    "salary": "Salary",
                },
                "timeRange": {
                    "title": "Select time range"
                },
                "status": {
                    "completed": "Completed",
                    "rejected": "Rejected",
                    "processing": "Processing",
                    "userCancel": "Canceled by User",
                    "scheduled": "Scheduled",
                    "shouldArriveBy": "Should arrive by",
                    "requiresAction": "Needs Attention",
                    "requiresActionContact": "Please complete KYC verification to proceed with the withdrawal.",
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "Are you sure you want to cancel withdrawal"
                    }
                }
            },
            "withdraw": {
                "title": "Asset Withdrawal",
                "currentlyAvailableAssets": "Currently available assets",
                "selectCurrency": "Select Currency",
                "mainnet": "Mainnet",
                "withdrawalAddress": "Withdrawal Address",
                "withdrawalAddressPL": "Please enter the withdrawal address",
                "withdrawalAmount": "Withdrawal Amount",
                "withdrawalAmountAllowed": "Allowed amount between",
                "withdrawalAmountEnter": "Enter amount",
                "all": "All",
                "fees": "Fees",
                "incomeTax": "Income Tax",
                "actualArrival": "Actual arrival",
                "confirmWithdrawal": "Confirm withdrawal",
                "withdrawalInstructions": "Withdrawal Instructions",
                "withdrawalInstruction1": "Arrival time: Withdrawal application will be completed within 1-72 hours.",
                "withdrawalInstruction2": "Withdrawal interval: It takes 24 hours after each successful arrival to initiate a withdrawal.",
                "withdrawalInstruction3": "A handling fee of 1 USDT is charged for each withdrawal.",
                "withdrawalInstruction4": "Tax standard",
                "withdrawalInstruction5": "1000 USDT and above: tax-free",
                "withdrawalInstruction6": "Subsequent withdrawal applications cannot be initiated before the first withdrawal is received.",
                "withdrawalInstruction7": "Minimum withdrawal amount: 10 USDT (the amount must be an integer, such as: 10, 20, 30 USDT).",
                "validation": {
                    "address": {
                        "required": "Withdrawal address is required"
                    },
                    "amount": {
                        "required": "Please enter the withdrawal amount",
                        "invalid": "Please enter the withdrawal amount",
                        "min": "Minimum withdrawal amount is 10 USDT",
                        "max": "Maximum withdrawal amount is 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "Transfer",
                "transferSuccessfully": "Transfer successfully",
                "transferCurrency": "Transfer Currency",
                "rechargeAndWithdraw": "Recharge and Withdraw",
                "balance": "Balance",
                "memberPoint": "Member Point",
                "transferAmount": "Transfer Amount",
                "all": "all",
                "confirmTransfer": "Confirm transfer",
                "enterAmount": "Please enter the transfer amount",
                "validation": {
                    "amount": {
                        "required": "Please enter the transfer amount",
                        "invalid": "Amount is required",
                        "min": "Minimum transfer amount is 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "Asset Deposit",
                "selectCurrency": "Select Currency",
                "selectNetwork": "Select Network",
                "mainnet": "Mainnet",
                "saveQRcode": "Save QR code",
                "depositAddress": "Deposit Address",
                "note": "Note",
                "depositInstructions": "Deposit Instructions",
                "instructions": [
                    "Before proceeding, please ensure your cryptocurrency type, main network, and address information are accurate.",
                    "The minimum deposit amount is 8 USDT; deposits below this amount will not be credited.",
                    "Do not deposit assets other than USDT or USDC to this address, as funds cannot be retrieved.",
                    "Always obtain the latest deposit address before each transaction to ensure fund security, as addresses are periodically updated."
                ]
            },
            "unreleased": {
                "title": "Unreleased Point",
                "desc": "Description of funds to be released ",
                "burn": "Burn",
                "burnCause": "Invitation rewards lower than the friend portion will cause burn",
                "friendshipLevel": "Friendship Level",
                "release": "Release",
                "releaseCondition": "Equal to or higher than the amount that can be released by friends",
                "info1": "The funds to be released are due to the current level being lower than the level of the friends in the team, and the invitation reward has burnt.",
                "info2": "When the user upgrades to be equal to or higher than the team friend's level, he can get this part of the amount to be released.",
                "toBeReleased": "Qouta to be released"
            },
            "memberPoint": {
                "title": "Member Point",
                "totalAssets": "Total Assets",
                "assetDeposit": "Asset Deposit",
                "assetDetails": "Asset Details"
            },
            "appDownload": {
                "title": "App download",
                "subtitle": "Download the app for a better experience",
                "googlePlay": {
                    "label": "Google Play Store Download"
                },
                "appStore": {
                    "label": "Apple Store Download"
                },
                "note": "Note: During the download and installation process, if there is a download failure, failure to parse the installation package, or installation exception, please download and install again"
            },
            "login": {
                "accountLogin": "Account Login",
                "noAccountYet": "No account yet?",
                "registerNow": "Register now",
                "tabs": {
                    "username": "Username Login",
                    "email": "Email Login"
                },
                "inputs": {
                    "username": {
                        "placeholder": "Username",
                        "validation": {
                            "required": "Username is required",
                            "min": "Username must be at least 3 characters"
                        }
                    },
                    "email": {
                        "placeholder": "E-mail",
                        "validation": {
                            "required": "Email is required",
                            "invalid": "Invalid email format"
                        }
                    },
                    "password": {
                        "label": "Password",
                        "placeholder": "Password",
                        "validation": {
                            "required": "Password is required",
                            "min": "Password must be at least 6 characters"
                        },
                        "show": "Show password",
                        "hide": "Hide password"
                    }
                },
                "links": {
                    "forgot": "Forgot password?",
                    "register": {
                        "text": "No account?",
                        "link": "Register now"
                    }
                },
                "buttons": {
                    "login": "Login"
                },
                "success": "Successful",
                "terms": {
                    "validation": {
                        "required": "You must accept the terms and conditions"
                    }
                },
                "errors": {
                    "userNotFound": "User not found",
                    "wrongPassword": "Incorrect password"
                }
            },
            "register": {
                "title": "Register",
                "accountRegistration": "Account Registration",
                "alreadyHaveAccount": "Already have an account?",
                "loginNow": "Login now",
                "inputs": {
                    "username": {
                        "placeholder": "Username",
                        "validation": {
                            "required": "Username is required",
                            "min": "Username must be at least 5 characters",
                            "matches": "Username must start with a letter, can only contain letters, numbers, '_' or '.', and cannot start or end with a special character or number."
                        }
                    },
                    "email": {
                        "placeholder": "E-mail Address",
                        "validation": {
                            "required": "Email is required",
                            "invalid": "Invalid email format"
                        }
                    },
                    "phone": {
                        "placeholder": "Mobile phone number",
                        "validation": {
                            "required": "Phone number is required",
                            "digits": "Phone number must contain only digits"
                        }
                    },
                    "password": {
                        "placeholder": "Login Password",
                        "validation": {
                            "required": "Password is required",
                            "min": "Password must be at least 6 characters"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "Confirm Password",
                        "validation": {
                            "required": "Please confirm your password",
                            "match": "Passwords must match"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "Invitation Code",
                        "validation": {
                            "required": "Invitation code is required"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "Email already in use",
                    "usernameTaken": "Username already in use",
                    "invalidReferral": "Invalid referral code"
                },
                "buttons": {
                    "register": "Register"
                },
                "terms": {
                    "validation": {
                        "required": "You must accept the terms and conditions"
                    }
                },
                "links": {
                    "login": {
                        "text": "Already have an account?",
                        "link": "Login now"
                    }
                },
                "success": "Successfully registered",
                "countrySelector": {
                    "title": "Select Country"
                }
            },
            "terms": {
                "part1": "By continuing with an account located in United Kingdom, you agree to our",
                "part2": "Terms of Service",
                "part3": "and acknowledge that you have read our",
                "part4": "Privacy Policy.",
                "title": "Eternova Films Privacy Policy"
            },
            "areaCode": {
                "label": "Choose area code"
            },
            "forgetPassword": {
                "title": "Forgot Password",
                "inputs": {
                    "email": {
                        "label": "E-MAIL",
                        "placeholder": "Your Email",
                        "validation": {
                            "required": "Email is required",
                            "invalid": "Invalid email format"
                        }
                    },
                    "verificationCode": {
                        "label": "Verification code",
                        "placeholder": "Please enter the verification code",
                        "validation": {
                            "required": "Verification code is required"
                        },
                        "button": "Get Verification Code "
                    },
                    "newPassword": {
                        "label": "New Password",
                        "placeholder": "Please enter a new password",
                        "validation": {
                            "required": "New password is required",
                            "min": "Password must be at least 6 characters"
                        },
                        "show": "Show password",
                        "hide": "Hide password"
                    }
                },
                "buttons": {
                    "reset": "Reset"
                },
                "alerts": {
                    "emailRequired": "Please enter a valid email",
                    "codeSent": "Verification code sent to your email",
                    "sendError": "Failed to send code",
                    "restSuccess": "Password reset successfully. Please log in.",
                    "emailNotFound": "Email not found",
                    "codeExpired": "Expired code"
                }
            },
            "verifyFundsPassword": {
                "title": "Verify Funds Password",
                "inputs": {
                    "fundsPassword": {
                        "label": "Funds Password",
                        "placeholder": "Enter funds password",
                        "validation": {
                            "required": "Funds password is required",
                            "matches": "Funds password must be exactly 6 digits"
                        }
                    }
                },
                "buttons": {
                    "verify": "Verify"
                },
                "alerts": {
                    "noFundsPassword": "Please bind the transaction password",
                    "checkError": "An error occurred while checking the funds password",
                    "purchaseSuccess": "Package purchased successfully",
                    "withdrawalSuccess": "Withdrawal requested successfully",
                    "insufficientBalance": "Insufficient balance",
                    "transferToTask": "Please transfer your balance from withdrawal to members point",
                    "invalidPurchase": "Invalid purchase initiation",
                    "incorrectPassword": "Incorrect funds password",
                    "purchaseError": "An error occurred during the purchase",
                    "wait48Hours": "Please wait 48 hours after changing funds password to withdraw",
                    "unauthorizedRequest": "Unauthorized request",
                    "generalError": "An error occurred, please try again later",
                    "tooManyAttempts": "Too many attempts, please try again later"
                }
            },
            "setFundsPassword": {
                "title": "Set Funds Password",
                "inputs": {
                    "fundsPassword": {
                        "label": "Funds Password",
                        "placeholder": "Set funds password",
                        "validation": {
                            "required": "Funds password is required",
                            "matches": "Funds password must be exactly 6 digits"
                        }
                    },
                    "confirmPassword": {
                        "label": "Confirm Funds Password",
                        "placeholder": "Confirm funds password",
                        "validation": {
                            "required": "Please confirm your funds password",
                            "matches": "Passwords must match"
                        }
                    }
                },
                "buttons": {
                    "save": "Save"
                },
                "alerts": {
                    "success": "Funds password set successfully",
                    "error": "An error occurred while setting the funds password"
                }
            },
            "lang": {
                "title": "Switch language"
            },
            "reels": {
                "missionAreaLabel": "Mission Area",
                "errors": {
                    "selectValidPackage": "Please select VIP mission",
                    "dailyLimitReached": "Limit reached",
                    "notPurchased": "No package found",
                    "packageExpired": "Package expired",
                    "alreadyLiked": "Already subscribed"
                },
                "loading": "Loading more videos...",
                "allSeen": "You've seen all available videos",
                "comments": {
                    "label": "Comments",
                    "stayTuned": "Coming Soon",
                    "stayTunedMsg": "We're working on bringing comments to you!"
                },
                "share": {
                    "label": "Share this video"
                },
                "notInYourRegion": {
                    "comments": "Commenting is not available in your region yet",
                    "share": "Sharing is not available in your region yet",
                    "save": "Saving is not available in your region yet",
                    "actions": "Actions are not available in your region yet",
                    "follow": "Following is not available in your region yet",
                },
                "popup": {
                    "selectVipMission": {
                        "title": "VIP Mission Area"
                    }
                },
                "share":"Share",
                "dislike":"Dislike",
                "remix":"Remix"
            },
            "agentPromotion": {
                "title": "Agency Promotion System",
                "teamSize":"Team size",
                "nextStageTeamSize":"Next stage team size",
                "nextStageGroupPromotionReward":"Next stage group promotion reward",
                "taskList":"Task List",
                "firstGenInvite":"Invite a first-level member",
                "secondGenInvite":"Invite a secondary member",
                "thirdGenInvite":"Invite a third-level member",
                "lastWeekIncrease":"Last week's increase",
                "thisWeekIncrease":"This week's increase",
                "available":"Available",
                "receiveBtn":"Receive",
                "levels":{
                    "beginnerCreator": "Beginner Creator",
                    "skilledSpecialist": "Skilled Specialist",
                    "seniorSpecialist": "Senior Specialist",
                    "supervisor": "Supervisor",
                    "seniorSupervisor": "Senior Supervisor",
                    "regionalManager": "Regional Manager",
                    "seniorManager": "Senior Manager"
                }
            },
            "addressList": {
                "title": "Address List",
                "addAddressBtn": "Add Address",
                "bidingAddress": {
                    "title": "Binding address",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "Rechrage Channel",
                        },
                        "mainnet": {
                            "label": "mainnet",
                        },
                        "address": {
                            "label": "Address",
                            "placeholder": "Please enter the address",
                            "validation": {
                                "required": "Address cannot be empty"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "The address is invalid, please enter the correct {{currency}}-{{network}} address",
                        "singleAddressLimit": "Only 1 addresses are allowed to be bound, If you need to change, please contact customer service",
                        "addressAlreadyExists": "The address already exists, please do not add it again",
                    },
                    "successBound": "Address bound successfully",
                },
                "pleaseSelectAddress": "Please select an address",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "This address is already in use. If you need to change it, please contact customer service."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "Warm remainder"
                },
                "content": {
                    "deleteAddress": {
                        "main": "Confirm to delete address"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "Dislike is not allowed",
                "subscribe": "Subscribe",
                "subscribed": "Subscribed",
                "subscribing": "Subscribing",
                "views": "views",
                "explore": "Explore"
            },
            "shortsRevenue": {
                "title": "Shorts"
            },
            "telegram": {
                "title": "Official Telegram",
                "joinGroup": "Join Telegram Group",
                "claimReward": "Claim 4 USDT",
                "inputs": {
                    "username": {
                        "label": "Telegram Username",
                        "placeholder": "Please enter your Telegram username",
                        "validation": {
                            "required": "Telegram username is required"
                        }
                    }
                },
                "rewardInstructions": "Group Entry Reward Instructions",
                "rewardInstruction1": "To apply for the group entry reward, please use your Telegram username.",
                "rewardInstruction2": "Only new accounts are eligible to receive the reward. Accounts that have already received it are not eligible for the group entry reward.",
                "rewardStatuses": {
                    "pendingReview": "You have already applied. Please wait for the admin to send the reward.",
                    "alreadyClaimed": "Reward already claimed.",
                    "pendingReviewGr": "Group entry reward is pending review. Ensure that you have joined the group while the admin is reviewing your request.",
                    "notInGroup": "The Telegram username you entered is not in the group. Please apply again. Make sure you have joined the group and that your Telegram username is correct.",
                    "userNameUsed": "Telegram username already used. Contact customer service if you believe this is incorrect."
                }
            },
            "missionsCenter": {
                "title": "Task List",
                "direct": "Direct Task",
                "team": "Team Task",
                "growth": "Growth Task",
                "progress": "Progress",
                "added": "Number to be collected: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "Claimed",
                "isClaiming": "Claiming",
                "inProgress": "In progress",
                "claimReward": "Claim",
                "addDirectActiveMembers": "Successfully invite {{count}} members from your first-generation to subscribe to any VIP package, and you will receive {{reward}} USDT",
                "addTeamMembers": "Receive {{reward}} USDT when your second- and third-generation subscriptions to VIP1 or above reach a total of {{count}} members",
                "addGrowthMembers": "Add {{count}} total active members",
                "rewardClaimed": "Reward claimed successfully",
                "claimFailed": "Failed to claim reward",

            }
        }
    }, 
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // Use the saved language or fallback to 'en'
        reloadOnPrerender: process.env.NODE_ENV === 'development',

        interpolation: {
            escapeValue: false, // React already escapes values
            format: (value, format, lng) => {
                if (format === 'uppercase') return value.toUpperCase();
                return value;
            }

        }
    });


export default i18n;
