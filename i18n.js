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
                "joinUs": "Join us on social media to stay up-to-date with the latest content",
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
                    "Eternova Films_open": {
                        "title": "Welcome to Eternova Films",
                        "content": "Tired of scrolling endlessly without reward? Imagine a world where your YouTube time actually pays you. It's here. Introducing a revolutionary platform that transforms your viewing habits into a source of passive income. For too long, we've given our attention away for free. We've spent countless hours absorbing content, laughing, learning, and being entertained, but what have we truly gained? Now, that's about to change. We've partnered with the world's leading film producers, bringing you blockbuster movies and exclusive behind-the-scenes content. We've also curated the best of YouTube, showcasing the most innovative and engaging content creators on the planet. This isn't just mindless scrolling; it's a curated experience designed to entertain, educate, and, most importantly, reward you. Here's how it works: Simply watch the content you love, and get paid for your time. No complicated surveys, no hidden fees, just pure, passive income. It's a simple, yet powerful concept: your attention has value, and we're here to make sure you get compensated for it. Think of it as an investment in yourself. You're not just spending time; you're investing it in your future. You're turning your downtime into income, your entertainment into earnings. It's a paradigm shift, a new way to interact with the digital world. This is more than just a platform; it's a community of viewers who understand the value of their time. It's a place where you can discover new content, connect with like-minded individuals, and build a passive income stream that grows with you. Don't just spend your time on YouTube. Invest it. Discover the potential of a new way to earn. Join us and experience the future of entertainment and passive income. Your viewing time is valuable, and we're here to make sure it pays off. Unlock the potential today. Start earning while you watch."
                    },
                }
            },
            "help": {
                "title": "Tutorials",
                "translation": {
                    "how_to_recharge": {
                        "title": "How to Recharge",
                        "content": "Tap 'Mine' on the bottom bar, then tap 'Recharge & Withdraw'. Tap the 'Recharge' button, select the recharge currency and mainnet, then copy the deposit address."
                    },
                    "how_to_do_task_long": {
                        "title": "How to Do a Task (Long Video Section)",
                        "content": "Tap 'VIP' on the bottom bar, find your package, tap 'Score' to receive income, select a video, then tap 'Subscribe'."
                    },
                    "how_to_do_task_shorts": {
                        "title": "How to Do a Task (Shorts Section)",
                        "content": "Tap 'Shorts' on the bottom bar, find your package, tap 'Score' to receive income, scroll down to view a video, then tap 'Subscribe'."
                    },
                    "how_to_withdraw": {
                        "title": "How to Withdraw",
                        "content": "Tap 'Mine' on the bottom bar, then tap 'Recharge & Withdraw'. Tap the 'Withdraw' button, select the withdrawal currency and mainnet, then choose your withdrawal address from your address list. Enter the withdrawal amount, tap 'Confirm Withdrawal', and verify your funding password."
                    },
                    "how_to_invite_friends": {
                        "title": "How to Invite Friends",
                        "content": "Tap 'Team' on the bottom bar, then tap 'Invite Friend'. Tap the 'Copy' button to copy your invitation code."
                    },
                    "how_to_register": {
                        "title": "How to Register",
                        "content": "Go to the registration page. Enter your username, email, select your phone number's country code, enter your phone number, create and confirm your password, enter the invitation code, and tap the 'Register' arrow to complete registration."
                    },
                    "how_to_purchase_package_long": {
                        "title": "How to Purchase a Package (Long Video Section)",
                        "content": "Tap 'VIP' on the bottom bar, select your package, then tap 'Unlock Now'."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "How to Purchase a Package (Shorts Section)",
                        "content": "Tap 'Shorts' on the bottom bar, select your package, then tap 'Unlock Now'."
                    },
                    "how_to_transfer_funds": {
                        "title": "How to Transfer Funds from Recharge & Withdraw to Member Points",
                        "content": "Tap 'Mine' on the bottom bar, then tap 'Recharge & Withdraw'. Tap the transfer icon in the top right, select the transfer currency, enter the amount, and tap 'Confirm Transfer'."
                    },
                    "how_to_reset_password": {
                        "title": "How to Reset Password",
                        "content": "Go to the login page, tap 'Forgot Password', enter your email, tap 'Get Verification Code', enter the code sent to your email, enter your new password, and tap 'OK'."
                    },
                    "how_to_change_password": {
                        "title": "How to Change Password",
                        "content": "Tap 'Mine' on the bottom bar, tap 'Login Password', enter your email, tap 'Get Verification Code', enter the code sent to your email, enter and confirm your new password, and tap 'OK'."
                    },
                    "how_to_set_funding_password": {
                        "title": "How to Set Funding Password",
                        "content": "Tap 'Mine' on the bottom bar, tap 'Transaction Password', enter your email, tap 'Get Verification Code', enter the code sent to your email, enter and confirm your new funding password, and tap 'OK'."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "How to Bind Withdrawal Address",
                        "content": "Tap 'Mine' on the bottom bar, then tap 'Recharge & Withdraw'. Tap the address list icon in the top right, tap 'Add Address', select the recharge channel and mainnet, enter your withdrawal address, enter your email, tap 'Get Verification Code', enter the code sent to your email, and tap 'OK'."
                    },
                    "how_to_protect_my_account": {
                        "title": "How to Protect My Account",
                        "content": "Tap 'Mine' on the bottom bar, then tap 'User KYC'. Enter your nationality, real name, select your document type, enter the document number, upload your documents, and tap 'Submit for Review'."
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
    ru:{
        translation:{
            "global": {
                "copySuccess": "Скопировано",
                "days": "Дней",
                "insufficientBalance": "Недостаточно средств",
                "wait48hrs": "Пожалуйста, подождите 48 часов после смены пароля средств для вывода",
                "pleaseEnter": "Пожалуйста, введите",
                "save": "Сохранить",
                "ok": "ОК",
                "error": {
                    "invalidCode": "Неверный код подтверждения",
                    "tryAgain": "Что-то пошло не так, попробуйте позже",
                },
                "saved": "Сохранено",
                "day": "День",
                "change": "Изменить",
                "from": "От",
                "to": "До",
                "analyze": "Анализировать",
                "total": "Всего",
                "loading": "Загрузка",
                "free": "Бесплатно",
                "ongoingWithdrawal": "Можно обрабатывать только один вывод за раз",
                "waitAfterSuccessWithdraw": "Последующие запросы на вывод должны быть сделаны через 24 часа после завершения предыдущего вывода",
                "waitAfterCanceledWithdraw": "Пожалуйста, подождите 24 часа после отмены вывода перед запросом другого",
                "todaysEarnings": "Сегодняшний доход",
                "cumulativeEarnings": "Совокупный доход",
                "myLevel": "Мой уровень",
                "upgrade": "Повысить",
                "success": "успешно",
                "stayTuned": "Оставайтесь с нами",
                "months": {
                    "mar": "Март",
                    "apr": "Апр",
                    "may": "Май",
                    "jun": "Июнь",
                    "jul": "Июль",
                    "aug": "Авг",
                    "sep": "Сент",
                    "oct": "Окт",
                    "nov": "Нояб",
                    "dec": "Дек"
                },
                "people": "Люди",
                "views": "Просмотры"
            },
            "common": {
                "errorOccurred": "Произошла ошибка"
            },
            "bottomBar": {
                "home": "Главная",
                "team": "Шортс",
                "revenue": "Доход",
                "record": "Команда",
                "mine": "Мой"
            },
            "home": {
                "viral": "Шортс",
                "tredningNow": "В тренде",
                "seeMore": "Для вас",
                "aboutUs": "Уведомления",
                "help": "Центр помощи",
                "missionCenter": "Объяснение дохода",
                "bonusDescription": "Представление компании",
                "socialMedia": "Социальные сети",
                "joinUs": "Присоединяйтесь к нам в социальных сетях, чтобы быть в курсе последних новостей",
                "leader": "Партнер Eternova Films City",
                "home": "Главная",
                "forYou": "Для вас",
                "inviteFriends": "Пригласить друзей",
                "inviteFriendsText": "Пригласите друзей, чтобы заработать доход",
            },
            "about": {
                "title": "О компании"
            },
            "notices": {
                "title": "Уведомления",
                "translation": {
                    "Eternova Films_open": {
                        "title": "Добро пожаловать в Eternova Films",
                        "content": "Устали от бесконечной прокрутки без вознаграждения? Представьте мир, где ваше время на YouTube на самом деле приносит вам деньги. Это здесь. Представляем революционную платформу, которая превращает ваши привычки просмотра в источник пассивного дохода. Слишком долго мы отдавали свое внимание бесплатно. Мы потратили бесчисленные часы, поглощая контент, смеясь, учась и развлекаясь, но что мы действительно получили? Теперь это изменится. Мы сотрудничаем с ведущими мировыми кинопродюсерами, предлагая вам блокбастеры и эксклюзивный контент о закулисье. Мы также отобрали лучшее из YouTube, демонстрируя самых инновационных и привлекательных создателей контента на планете. Это не просто бессмысленная прокрутка; это тщательно подобранный опыт, призванный развлекать, обучать и, самое главное, вознаграждать вас. Вот как это работает: просто смотрите контент, который вам нравится, и получайте деньги за свое время. Никаких сложных опросов, никаких скрытых комиссий, только чистый пассивный доход. Это простая, но мощная концепция: ваше внимание имеет ценность, и мы здесь, чтобы убедиться, что вы получаете за него компенсацию. Думайте об этом как об инвестиции в себя. Вы не просто тратите время; вы инвестируете его в свое будущее. Вы превращаете свой досуг в доход, свои развлечения в заработок. Это смена парадигмы, новый способ взаимодействия с цифровым миром. Это больше, чем просто платформа; это сообщество зрителей, которые понимают ценность своего времени. Это место, где вы можете открывать для себя новый контент, общаться с единомышленниками и создавать поток пассивного дохода, который растет вместе с вами. Не просто тратьте свое время на YouTube. Инвестируйте его. Откройте для себя потенциал нового способа заработка. Присоединяйтесь к нам и ощутите будущее развлечений и пассивного дохода. Ваше время просмотра ценно, и мы здесь, чтобы убедиться, что оно окупается. Раскройте потенциал сегодня. Начните зарабатывать во время просмотра."
                    }
                }
            },
            "help": {
                "title": "Инструкции",
                "translation": {
                    "how_to_recharge": {
                        "title": "Как пополнить счет",
                        "content": "Нажмите «Мой» на нижней панели, затем нажмите «Пополнить и вывести». Нажмите кнопку «Пополнить», выберите валюту пополнения и основную сеть, затем скопируйте адрес депозита."
                    },
                    "how_to_do_task_long": {
                        "title": "Как выполнить задание (Раздел длинных видео)",
                        "content": "Нажмите «VIP» на нижней панели, найдите свой пакет, нажмите «Получить доход», чтобы получить доход, выберите видео, затем нажмите «Подписаться»."
                    },
                    "how_to_do_task_shorts": {
                        "title": "Как выполнить задание (Раздел Shorts)",
                        "content": "Нажмите «Шортс» на нижней панели, найдите свой пакет, нажмите «Получить доход», чтобы получить доход, прокрутите вниз, чтобы просмотреть видео, затем нажмите «Подписаться»."
                    },
                    "how_to_withdraw": {
                        "title": "Как вывести средства",
                        "content": "Нажмите «Мой» на нижней панели, затем нажмите «Пополнить и вывести». Нажмите кнопку «Вывести», выберите валюту вывода и основную сеть, затем выберите адрес вывода из списка адресов. Введите сумму вывода, нажмите «Подтвердить вывод» и подтвердите свой пароль для операций."
                    },
                    "how_to_invite_friends": {
                        "title": "Как пригласить друзей",
                        "content": "Нажмите «Команда» на нижней панели, затем нажмите «Пригласить друга». Нажмите кнопку «Копировать», чтобы скопировать свой код приглашения."
                    },
                    "how_to_register": {
                        "title": "Как зарегистрироваться",
                        "content": "Перейдите на страницу регистрации. Введите имя пользователя, адрес электронной почты, выберите код страны вашего номера телефона, введите свой номер телефона, создайте и подтвердите свой пароль, введите код приглашения и нажмите стрелку «Зарегистрироваться», чтобы завершить регистрацию."
                    },
                    "how_to_purchase_package_long": {
                        "title": "Как приобрести пакет (Раздел длинных видео)",
                        "content": "Нажмите «VIP» на нижней панели, выберите свой пакет, затем нажмите «Разблокировать сейчас»."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "Как приобрести пакет (Раздел Shorts)",
                        "content": "Нажмите «Шортс» на нижней панели, выберите свой пакет, затем нажмите «Разблокировать сейчас»."
                    },
                    "how_to_transfer_funds": {
                        "title": "Как перевести средства из «Пополнить и вывести» в «Баллы участника»",
                        "content": "Нажмите «Мой» на нижней панели, затем нажмите «Пополнить и вывести». Нажмите значок перевода в правом верхнем углу, выберите валюту перевода, введите сумму и нажмите «Подтвердить перевод»."
                    },
                    "how_to_reset_password": {
                        "title": "Как сбросить пароль",
                        "content": "Перейдите на страницу входа, нажмите «Забыли пароль», введите свой адрес электронной почты, нажмите «Получить код подтверждения», введите код, отправленный на вашу электронную почту, введите свой новый пароль и нажмите «ОК»."
                    },
                    "how_to_change_password": {
                        "title": "Как изменить пароль",
                        "content": "Нажмите «Мой» на нижней панели, нажмите «Пароль для входа», введите свой адрес электронной почты, нажмите «Получить код подтверждения», введите код, отправленный на вашу электронную почту, введите и подтвердите свой новый пароль и нажмите «ОК»."
                    },
                    "how_to_set_funding_password": {
                        "title": "Как установить пароль для операций",
                        "content": "Нажмите «Мой» на нижней панели, нажмите «Пароль транзакции», введите свой адрес электронной почты, нажмите «Получить код подтверждения», введите код, отправленный на вашу электронную почту, введите и подтвердите свой новый пароль для операций и нажмите «ОК»."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "Как привязать адрес вывода",
                        "content": "Нажмите «Мой» на нижней панели, затем нажмите «Пополнить и вывести». Нажмите значок списка адресов в правом верхнем углу, нажмите «Добавить адрес», выберите канал пополнения и основную сеть, введите свой адрес вывода, введите свой адрес электронной почты, нажмите «Получить код подтверждения», введите код, отправленный на вашу электронную почту, и нажмите «ОК»."
                    },
                    "how_to_protect_my_account": {
                        "title": "Как защитить мою учетную запись",
                        "content": "Нажмите «Мой» на нижней панели, затем нажмите «KYC пользователя». Введите свою национальность, настоящее имя, выберите тип документа, введите номер документа, загрузите свои документы и нажмите «Отправить на рассмотрение»."
                    }
                }
            },
            "helpDetails": {
                "title": "Инструкция"
            },
            "introduction": {
                "title": "Объяснение дохода"
            },
            "social": {
                "title": "Социальные сети Eternova Films",
                "offical": "Социальные сети",
                "officalTGChannel": "Официальный Telegram-канал",
                "officalTGGroup": "Официальная Telegram-группа",
                "subscribers": "подписчики",
                "join": "Присоединиться",
                "officalIG": "Официальный профиль Instagram",
                "follow": "Подписаться",
                "followers": "подписчики",
                "community": "Сообщество",
                "members": "участники",
                "new": "Новое",
                "errorRegion": "Пожалуйста, приобретите пакет, чтобы получить доступ к этой группе."
            },
            "notification": {
                "title": "Уведомление",
                "types": {
                    "eventNotification": "Уведомление о событии",
                    "walletMessage": "Сообщение кошелька",
                    "systemNotification": "Системное уведомление"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "Заявка на вывод",
                        "message": "Вы подали заявку на вывод USDT, пожалуйста, дождитесь одобрения, номер заказа: {{order_number}}, сумма: {{amount}}, комиссия за обработку: {{fee}}USDT"
                    },
                    "withdrawal_approve": {
                        "title": "Вывод завершен",
                        "message": "Ваш вывод средств завершен, номер заказа: {{order_number}}, сумма: {{amount}}, комиссия за обработку: {{fee}} USDT"
                    }
                }
            },
            "notificationDetails": {
                "title": "Уведомление"
            },
            "team": {
                "title": "Команда",
                "teamMemberListBtn": "Список участников команды",
                "inviteFriend": "Пригласить друга",
                "inviteFriendInfo": "Смотрите ютуберов и начните зарабатывать",
                "totalIncome": "Общий доход пользователей",
                "todayIncome": "Сегодняшний доход",
                "todayInc": "Сегодня",
                "teamTotal": "Общая сумма подписки команды",
                "likesIncome": "Доход от лайков",
                "teamIncome": "Доход команды",
                "totalReturn": "Общий возврат",
                "totalTeamMembers": "Всего участников команды",
                "addedToday": "Добавлено сегодня",
                "firstGeneration": "Первое поколение",
                "totalMembers": "Всего участников",
                "totalActiveMembers": "Активные",
                "genTotalIncome": "Общий доход",
                "secondGeneration": "Второе поколение",
                "thirdGeneration": "Третье поколение",
                "totalNumberOfFriends": "Общее количество друзей",
                "activeFriends": "Активные друзья"
            },
            "myTeam": {
                "title": "Список участников команды",
                "id": "ID",
                "generation": "Поколение",
                "registrationDate": "Дата регистрации",
                "noResults": "Нет результатов",
                "noMoreResults": "Больше нет результатов"
            },
            "invite": {
                "title": "Пригласить друга",
                "headline": "Смотрите ролики и начните зарабатывать",
                "invitationLink": "Ссылка для приглашения",
                "invitationCode": "Код приглашения"
            },
            "revenue": {
                "title": "Центр участников",
                "specialPackage": "Специальные пакеты",
                "currentlevel": "Текущий уровень",
                "todayEarning": "Сегодняшний заработок",
                "cumulativeEarning": "Совокупный заработок",
                "package": {
                    "view": "Просмотр",
                    "dailyPerView": "Ежедневные просмотры",
                    "validTime": "Срок действия",
                    "perViewIncome": "Доход за просмотр",
                    "scoreBtn": "Получить доход",
                    "openSoon": "Скоро открытие",
                    "stayTuned": "Оставайтесь с нами",
                    "unlockNow": "Разблокировать сейчас",
                    "expired": "Срок действия пакета истек",
                    "expiresIn": "Истекает через",
                    "totalReturn": "Общий возврат",
                    "dailyReturn": "Ежедневный возврат"
                },
                "packageDetails": "Детали",
                "packageExplain": "Детали пакетов",
                "buy": {
                    "modal": {
                        "text": "Вы уверены, что хотите приобрести"
                    }
                }
            },
            "record": {
                "title": "Запись",
                "viewRating": "Рейтинг просмотра",
                "viewEarnings": "Заработок от просмотров",
                "noMoreRecords": "Больше нет записей"
            },
            "profile": {
                "partner": "Система продвижения агентов Eternova Films",
                "officalWebsite": "Ссылка на официальный веб-сайт",
                "instagramAccount": "Аккаунт Instagram",
                "userKYC": "KYC пользователя",
                "telegram": "Telegram",
                "scoreRecord": "Запись баллов",
                "loginPasswordTab": "Пароль для входа",
                "transactionPasswordTab": "Пароль транзакции",
                "notification": "Уведомление",
                "switchLanguage": "Сменить язык",
                "contactCustomerService": "Связаться со службой поддержки",
                "appDownload": "Скачать приложение",
                "logOut": "Выйти",
                "rechargeAndWithdraw": "Пополнить и вывести",
                "unreleasedPoint": "Невыпущенные баллы",
                "memberPoint": "Баллы участника",
                "details": {
                    "title": "Личная информация",
                    "nickname": "Никнейм",
                    "enterNickname": "Введите ваш никнейм",
                    "gender": "Пол",
                    "male": "мужской",
                    "female": "женский",
                    "validation": {
                        "nickname": {
                            "required": "Никнейм обязателен"
                        },
                        "telegram": {
                            "invalid": "Неверное имя пользователя Telegram"
                        },
                        "whatsapp": {
                            "invalid": "Неверный номер WhatsApp"
                        }
                    },
                    "updatedSuccess": "Профиль успешно обновлен"
                },
                "kyc": {
                    "title": "Подтверждено",
                    "errorPassport1": "Пожалуйста, загрузите лицевую сторону паспорта",
                    "errorPassport2": "Пожалуйста, загрузите селфи с паспортом в руках",
                    "errorID1": "Пожалуйста, загрузите лицевую сторону удостоверения личности",
                    "errorID2": "Пожалуйста, загрузите обратную сторону удостоверения личности",
                    "errorID3": "Пожалуйста, загрузите селфи с удостоверением личности в руках",
                    "successMsg": "KYC успешно отправлен на рассмотрение",
                    "errorMsg": "Не удалось отправить KYC, попробуйте еще раз",
                    "inputs": {
                        "nationality": {
                            "label": "Национальность",
                            "placeholder": "Пожалуйста, введите национальность",
                            "validation": {
                                "required": "Национальность обязательна"
                            }
                        },
                        "name": {
                            "label": "Имя",
                            "placeholder": "Пожалуйста, введите ваше имя",
                            "validation": {
                                "required": "Имя обязательно"
                            }
                        },
                        "documentNumber": {
                            "label": "Номер документа",
                            "placeholder": "Пожалуйста, введите номер удостоверения",
                            "validation": {
                                "required": "Номер документа обязателен"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "Тип документа обязателен"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "Типы документов",
                            "option1": "Удостоверение личности",
                            "option2": "Паспорт",
                            "idCard": "Удостоверение личности",
                            "passport": "Паспорт"
                        }
                    },
                    "uploadDocument": "Загрузка документа",
                    "frontOfDocument": "Лицевая сторона документа",
                    "backOfDocument": "Обратная сторона документа",
                    "selfieHoldingDocument": "Селфи с документом",
                    "actionButton": "Отправить на рассмотрение",
                    "kycVerified": "Ваша информация была рассмотрена и подтверждена. Ваши личные данные были немедленно удалены. Профиль снова активен. Благодарим за сотрудничество.",
                    "alreadySubmited": "Вы уже отправили. Пожалуйста, дождитесь завершения процесса проверки.",
                    "underReview": "Ваш запрос на верификацию находится на рассмотрении.",
                    "verified": "Ваша KYC-верификация завершена. Ваши документы приняты.",
                    "rejected": "KYC-верификация не удалась. Пожалуйста, отправьте документы повторно."
                },
                "loginPassword": {
                    "title": "Пароль для входа",
                    "codeSent": "Код подтверждения успешно отправлен",
                    "changedSuccess": "Пароль успешно изменен",
                    "inputs": {
                        "email": {
                            "label": "Адрес электронной почты",
                            "placeholder": "Электронная почта"
                        },
                        "verifyCode": {
                            "label": "Код подтверждения",
                            "placeholder": "Введите код подтверждения",
                            "sendBtn": "Отправить",
                            "validation": {
                                "required": "Код подтверждения обязателен"
                            }
                        },
                        "newPassword": {
                            "label": "Новый пароль",
                            "placeholder": "6-20 буквенно-цифровых символов",
                            "validation": {
                                "required": "Новый пароль обязателен",
                                "min": "Пароль должен содержать не менее 6 символов",
                                "max": "Пароль не может быть длиннее 20 символов"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Введите пароль еще раз для подтверждения",
                            "validation": {
                                "required": "Пожалуйста, подтвердите ваш пароль",
                                "oneOf": "Пароли должны совпадать"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "Пароль для операций",
                    "codeSent": "Код подтверждения успешно отправлен",
                    "changedSuccess": "Пароль для операций успешно изменен",
                    "inputs": {
                        "email": {
                            "label": "Адрес электронной почты",
                            "placeholder": "Электронная почта"
                        },
                        "verifyCode": {
                            "label": "Код подтверждения",
                            "placeholder": "Введите код подтверждения",
                            "sendBtn": "Отправить",
                            "validation": {
                                "required": "Код подтверждения обязателен"
                            }
                        },
                        "newPassword": {
                            "label": "Пароль для операций",
                            "placeholder": "6-значная комбинация",
                            "validation": {
                                "required": "Новый пароль для операций обязателен",
                                "matches": "Пароль для операций должен состоять ровно из 6 цифр"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Введите пароль еще раз для подтверждения",
                            "validation": {
                                "required": "Пожалуйста, подтвердите ваш пароль",
                                "oneOf": "Пароли должны совпадать"
                            }
                        }
                    },
                    "reminder": {
                        "title": "Теплое напоминание",
                        "points": {
                            "point1": "Ваш пароль для операций используется для транзакций, выводов и настроек безопасности учетной записи. Рекомендуется, чтобы он не совпадал с паролем для входа. В случае кражи учетной записи, этот сайт не несет ответственности.",
                            "point2": "После изменения пароля для операций вы не сможете вывести деньги в течение 48 часов"
                        }
                    }
                }
            },
            "wallet": {
                "title": "Пополнить и вывести",
                "totalAssets": "Общие активы",
                "recharge": "Пополнить",
                "withdraw": "Вывести",
                "transfer": "Перевести",
                "assetDetails": "Детали активов",
                "cancelWithdrawal": "Отменить вывод",
                "filters": {
                    "all": "Все",
                    "recharge": "Пополнение",
                    "transfer": "Перевод",
                    "withdraw": "Вывод",
                    "levelPurchase": "Покупка уровня",
                    "taskReward": "Награда за задание",
                    "teamCommission": "Комиссия команды",
                    "bonus": "Бонус",
                    "salary": "Зарплата"
                },
                "timeRange": {
                    "title": "Выберите временной диапазон"
                },
                "status": {
                    "completed": "Завершено",
                    "rejected": "Отклонено",
                    "processing": "В процессе",
                    "userCancel": "Отменено пользователем",
                    "scheduled": "Запланировано",
                    "shouldArriveBy": "Должно прибыть к",
                    "requiresAction": "Требуется внимание",
                    "requiresActionContact": "Пожалуйста, завершите KYC-верификацию для продолжения вывода."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "Вы уверены, что хотите отменить вывод?"
                    }
                }
            },
            "withdraw": {
                "title": "Вывод активов",
                "currentlyAvailableAssets": "Доступные активы на данный момент",
                "selectCurrency": "Выберите валюту",
                "mainnet": "Основная сеть",
                "withdrawalAddress": "Адрес вывода",
                "withdrawalAddressPL": "Пожалуйста, введите адрес вывода",
                "withdrawalAmount": "Сумма вывода",
                "withdrawalAmountAllowed": "Допустимая сумма от",
                "withdrawalAmountEnter": "Введите сумму",
                "all": "Все",
                "fees": "Комиссии",
                "incomeTax": "Подоходный налог",
                "actualArrival": "Фактическое поступление",
                "confirmWithdrawal": "Подтвердить вывод",
                "withdrawalInstructions": "Инструкции по выводу",
                "withdrawalInstruction1": "Время поступления: Заявка на вывод будет выполнена в течение 1-72 часов.",
                "withdrawalInstruction2": "Интервал вывода: Для инициации следующего вывода требуется 24 часа после каждого успешного поступления.",
                "withdrawalInstruction3": "За каждый вывод взимается комиссия за обработку в размере 1 USDT.",
                "withdrawalInstruction4": "Стандарт налогообложения",
                "withdrawalInstruction5": "1000 USDT и выше: без налога",
                "withdrawalInstruction6": "Последующие заявки на вывод не могут быть инициированы до получения первого вывода.",
                "withdrawalInstruction7": "Минимальная сумма вывода: 10 USDT (сумма должна быть целым числом, например: 10, 20, 30 USDT).",
                "validation": {
                    "address": {
                        "required": "Адрес вывода обязателен"
                    },
                    "amount": {
                        "required": "Пожалуйста, введите сумму вывода",
                        "invalid": "Пожалуйста, введите сумму вывода",
                        "min": "Минимальная сумма вывода - 10 USDT",
                        "max": "Максимальная сумма вывода - 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "Перевод",
                "transferSuccessfully": "Перевод успешно выполнен",
                "transferCurrency": "Валюта перевода",
                "rechargeAndWithdraw": "Пополнить и вывести",
                "balance": "Баланс",
                "memberPoint": "Баллы участника",
                "transferAmount": "Сумма перевода",
                "all": "все",
                "confirmTransfer": "Подтвердить перевод",
                "enterAmount": "Пожалуйста, введите сумму перевода",
                "validation": {
                    "amount": {
                        "required": "Пожалуйста, введите сумму перевода",
                        "invalid": "Сумма обязательна",
                        "min": "Минимальная сумма перевода - 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "Депозит активов",
                "selectCurrency": "Выберите валюту",
                "mainnet": "Основная сеть",
                "saveQRcode": "Сохранить QR-код",
                "depositAddress": "Адрес депозита",
                "note": "Примечание",
                "depositInstructions": "Инструкции по депозиту",
                "instructions": [
                    "Перед продолжением убедитесь, что тип вашей криптовалюты, основная сеть и информация об адресе верны.",
                    "Минимальная сумма депозита - 8 USDT; депозиты ниже этой суммы не будут зачислены.",
                    "Не вносите активы, отличные от USDT или USDC, на этот адрес, так как средства не могут быть возвращены.",
                    "Всегда получайте последний адрес депозита перед каждой транзакцией, чтобы обеспечить безопасность средств, так как адреса периодически обновляются."
                ]
            },
            "unreleased": {
                "title": "Невыпущенные баллы",
                "desc": "Описание средств, подлежащих выпуску",
                "burn": "Сжигание",
                "burnCause": "Награды за приглашение ниже доли друга приведут к сжиганию",
                "friendshipLevel": "Уровень дружбы",
                "release": "Выпуск",
                "releaseCondition": "Равно или выше суммы, которая может быть выпущена друзьями",
                "info1": "Средства, подлежащие выпуску, связаны с тем, что текущий уровень ниже уровня друзей в команде, и награда за приглашение была сожжена.",
                "info2": "Когда пользователь повышает уровень до равного или выше уровня друга в команде, он может получить эту часть суммы, подлежащую выпуску.",
                "toBeReleased": "Квота для выпуска"
            },
            "memberPoint": {
                "title": "Баллы участника",
                "totalAssets": "Общие активы",
                "assetDeposit": "Депозит активов",
                "assetDetails": "Детали активов"
            },
            "appDownload": {
                "title": "Скачать приложение",
                "subtitle": "Скачайте приложение для лучшего опыта",
                "googlePlay": {
                    "label": "Скачать из Google Store"
                },
                "appStore": {
                    "label": "Скачать из Apple Store"
                },
                "note": "Примечание: Во время процесса загрузки и установки, если возникает ошибка загрузки, ошибка разбора установочного пакета или исключение установки, пожалуйста, загрузите и установите снова"
            },
            "login": {
                "tabs": {
                    "username": "Вход по имени пользователя",
                    "email": "Вход по электронной почте"
                },
                "inputs": {
                    "username": {
                        "placeholder": "Имя пользователя",
                        "validation": {
                            "required": "Имя пользователя обязательно",
                            "min": "Имя пользователя должно содержать не менее 3 символов"
                        }
                    },
                    "email": {
                        "placeholder": "Электронная почта",
                        "validation": {
                            "required": "Электронная почта обязательна",
                            "invalid": "Неверный формат электронной почты"
                        }
                    },
                    "password": {
                        "label": "Пароль",
                        "placeholder": "Пароль",
                        "validation": {
                            "required": "Пароль обязателен",
                            "min": "Пароль должен содержать не менее 6 символов"
                        },
                        "show": "Показать пароль",
                        "hide": "Скрыть пароль"
                    }
                },
                "links": {
                    "forgot": "Забыли пароль?",
                    "register": {
                        "text": "Нет аккаунта?",
                        "link": "Зарегистрироваться сейчас"
                    }
                },
                "buttons": {
                    "login": "Войти"
                },
                "success": "Успешно",
                "terms": {
                    "validation": {
                        "required": "Вы должны принять условия использования"
                    }
                },
                "errors": {
                    "userNotFound": "Пользователь не найден",
                    "wrongPassword": "Неверный пароль"
                }
            },
            "register": {
                "title": "Регистрация",
                "inputs": {
                    "username": {
                        "placeholder": "Имя пользователя",
                        "validation": {
                            "required": "Имя пользователя обязательно",
                            "min": "Имя пользователя должно содержать не менее 5 символов",
                            "matches": "Имя пользователя должно начинаться с буквы, может содержать только буквы, цифры, '_' или '.', и не может начинаться или заканчиваться специальным символом или цифрой."
                        }
                    },
                    "email": {
                        "placeholder": "Адрес электронной почты",
                        "validation": {
                            "required": "Электронная почта обязательна",
                            "invalid": "Неверный формат электронной почты"
                        }
                    },
                    "phone": {
                        "placeholder": "Номер мобильного телефона",
                        "validation": {
                            "required": "Номер телефона обязателен",
                            "digits": "Номер телефона должен содержать только цифры"
                        }
                    },
                    "password": {
                        "placeholder": "Пароль для входа",
                        "validation": {
                            "required": "Пароль обязателен",
                            "min": "Пароль должен содержать не менее 6 символов"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "Подтвердить пароль",
                        "validation": {
                            "required": "Пожалуйста, подтвердите ваш пароль",
                            "match": "Пароли должны совпадать"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "Код приглашения",
                        "validation": {
                            "required": "Код приглашения обязателен"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "Электронная почта уже используется",
                    "usernameTaken": "Имя пользователя уже используется",
                    "invalidReferral": "Недействительный реферальный код"
                },
                "buttons": {
                    "register": "Зарегистрироваться"
                },
                "terms": {
                    "validation": {
                        "required": "Вы должны принять условия использования"
                    }
                },
                "links": {
                    "login": {
                        "text": "Уже есть аккаунт?",
                        "link": "Войти сейчас"
                    }
                },
                "success": "Успешно зарегистрировано",
                "countrySelector": {
                    "title": "Выберите страну"
                }
            },
            "terms": {
                "part1": "Продолжая работу с аккаунтом, находящимся в Соединенном Королевстве, вы соглашаетесь с нашими",
                "part2": "Условиями обслуживания",
                "part3": "и подтверждаете, что прочитали нашу",
                "part4": "Политику конфиденциальности.",
                "title": "Политика конфиденциальности Eternova Films"
            },
            "areaCode": {
                "label": "Выберите код региона"
            },
            "forgetPassword": {
                "title": "Забыли пароль",
                "inputs": {
                    "email": {
                        "label": "ЭЛЕКТРОННАЯ ПОЧТА",
                        "placeholder": "Ваш адрес электронной почты",
                        "validation": {
                            "required": "Электронная почта обязательна",
                            "invalid": "Неверный формат электронной почты"
                        }
                    },
                    "verificationCode": {
                        "label": "Код подтверждения",
                        "placeholder": "Пожалуйста, введите код подтверждения",
                        "validation": {
                            "required": "Код подтверждения обязателен"
                        },
                        "button": "Получить код подтверждения"
                    },
                    "newPassword": {
                        "label": "Новый пароль",
                        "placeholder": "Пожалуйста, введите новый пароль",
                        "validation": {
                            "required": "Новый пароль обязателен",
                            "min": "Пароль должен содержать не менее 6 символов"
                        },
                        "show": "Показать пароль",
                        "hide": "Скрыть пароль"
                    }
                },
                "buttons": {
                    "reset": "Сбросить"
                },
                "alerts": {
                    "emailRequired": "Пожалуйста, введите действительный адрес электронной почты",
                    "codeSent": "Код подтверждения отправлен на вашу электронную почту",
                    "sendError": "Не удалось отправить код",
                    "restSuccess": "Пароль успешно сброшен. Пожалуйста, войдите в систему.",
                    "emailNotFound": "Электронная почта не найдена",
                    "codeExpired": "Срок действия кода истек"
                }
            },
            "verifyFundsPassword": {
                "title": "Подтвердить пароль для операций",
                "inputs": {
                    "fundsPassword": {
                        "label": "Пароль для операций",
                        "placeholder": "Введите пароль для операций",
                        "validation": {
                            "required": "Пароль для операций обязателен",
                            "matches": "Пароль для операций должен состоять ровно из 6 цифр"
                        }
                    }
                },
                "buttons": {
                    "verify": "Подтвердить"
                },
                "alerts": {
                    "noFundsPassword": "Пожалуйста, привяжите пароль транзакции",
                    "checkError": "Произошла ошибка при проверке пароля для операций",
                    "purchaseSuccess": "Пакет успешно приобретен",
                    "withdrawalSuccess": "Запрос на вывод успешно отправлен",
                    "insufficientBalance": "Недостаточно средств",
                    "transferToTask": "Пожалуйста, переведите ваш баланс из вывода в баллы участников",
                    "invalidPurchase": "Неверная инициация покупки",
                    "incorrectPassword": "Неверный пароль для операций",
                    "purchaseError": "Произошла ошибка во время покупки",
                    "wait48Hours": "Пожалуйста, подождите 48 часов после смены пароля для операций, чтобы вывести средства",
                    "unauthorizedRequest": "Несанкционированный запрос",
                    "generalError": "Произошла ошибка, пожалуйста, попробуйте позже",
                    "tooManyAttempts": "Слишком много попыток, пожалуйста, попробуйте позже"
                }
            },
            "setFundsPassword": {
                "title": "Установить пароль для операций",
                "inputs": {
                    "fundsPassword": {
                        "label": "Пароль для операций",
                        "placeholder": "Установить пароль для операций",
                        "validation": {
                            "required": "Пароль для операций обязателен",
                            "matches": "Пароль для операций должен состоять ровно из 6 цифр"
                        }
                    },
                    "confirmPassword": {
                        "label": "Подтвердить пароль для операций",
                        "placeholder": "Подтвердить пароль для операций",
                        "validation": {
                            "required": "Пожалуйста, подтвердите ваш пароль для операций",
                            "matches": "Пароли должны совпадать"
                        }
                    }
                },
                "buttons": {
                    "save": "Сохранить"
                },
                "alerts": {
                    "success": "Пароль для операций успешно установлен",
                    "error": "Произошла ошибка при установке пароля для операций"
                }
            },
            "lang": {
                "title": "Сменить язык"
            },
            "reels": {
                "missionAreaLabel": "Область заданий",
                "errors": {
                    "selectValidPackage": "Пожалуйста, выберите VIP-задание",
                    "dailyLimitReached": "Лимит достигнут",
                    "notPurchased": "Недействительный пакет",
                    "packageExpired": "Срок действия пакета истек",
                    "alreadyLiked": "Уже подписаны"
                },
                "loading": "Загрузка большего количества видео...",
                "allSeen": "Вы просмотрели все доступные видео",
                "comments": {
                    "label": "Комментарии",
                    "stayTuned": "Скоро",
                    "stayTunedMsg": "Мы работаем над тем, чтобы добавить комментарии!"
                },
                "share": {
                    "label": "Поделиться этим видео"
                },
                "notInYourRegion": {
                    "comments": "Комментирование пока недоступно в вашем регионе",
                    "share": "Обмен пока недоступен в вашем регионе",
                    "save": "Сохранение пока недоступно в вашем регионе",
                    "actions": "Действия пока недоступны в вашем регионе",
                    "follow": "Подписка пока недоступна в вашем регионе"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "VIP Область заданий"
                    }
                },
                "share":"Поделиться",
                "dislike":"Не нравится",
                "remix":"Ремикс"
            },
            "agentPromotion": {
                "title": "Система продвижения агентства",
                "teamSize":"Размер команды",
                "nextStageTeamSize":"Размер команды следующего этапа",
                "nextStageGroupPromotionReward":"Награда за групповое продвижение следующего этапа",
                "taskList":"Список задач",
                "firstGenInvite":"Пригласить участника первого уровня",
                "secondGenInvite":"Пригласить участника второго уровня",
                "thirdGenInvite":"Пригласить участника третьего уровня",
                "lastWeekIncrease":"Прирост за прошлую неделю",
                "thisWeekIncrease":"Прирост за эту неделю",
                "available":"Доступно",
                "receiveBtn":"Получить",
                "levels":{
                    "beginnerCreator": "Начинающий творец",
                    "skilledSpecialist": "Квалифицированный специалист",
                    "seniorSpecialist": "Старший специалист",
                    "supervisor": "Супервайзер",
                    "seniorSupervisor": "Старший супервайзер",
                    "regionalManager": "Региональный менеджер",
                    "seniorManager": "Старший менеджер"
                }
            },
            "addressList": {
                "title": "Список адресов",
                "addAddressBtn": "Добавить адрес",
                "bidingAddress": {
                    "title": "Привязка адреса",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "Канал пополнения"
                        },
                        "mainnet": {
                            "label": "Основная сеть"
                        },
                        "address": {
                            "label": "Адрес",
                            "placeholder": "Пожалуйста, введите адрес",
                            "validation": {
                                "required": "Адрес не может быть пустым"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "Неверный адрес, пожалуйста, введите правильный адрес USDT-TRC20",
                        "singleAddressLimit": "Разрешено привязать только 1 адрес. Если вам нужно изменить его, обратитесь в службу поддержки",
                        "addressAlreadyExists": "Адрес уже существует, пожалуйста, не добавляйте его снова"
                    },
                    "successBound": "Адрес успешно привязан"
                },
                "pleaseSelectAddress": "Пожалуйста, выберите адрес",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "Этот адрес уже используется. Если вам нужно изменить его, обратитесь в службу поддержки."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "Теплое напоминание"
                },
                "content": {
                    "deleteAddress": {
                        "main": "Подтвердить удаление адреса"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "Нельзя поставить дизлайк",
                "subscribe": "Подписаться",
                "subscribed": "Подписано",
                "subscribing": "Подписка",
                "views": "просмотров",
                "explore": "Обзор"
            },
            "shortsRevenue": {
                "title": "Шортс"
            },
            "missionsCenter": {
                "title": "Центр миссий",
                "direct": "Прямые",
                "team": "Команда",
                "growth": "Рост",
                "progress": "Прогресс",
                "added": "Добавлено {{count}} из {{total}}",
                "alreadyClaimed": "Получено",
                "isClaiming": "Получение",
                "inProgress": "В процессе",
                "claimReward": "Получить",
                "addDirectActiveMembers": "Добавить {{count}} прямых активных участников",
                "addTeamMembers": "Добавить {{count}} участников команды",
                "addGrowthMembers": "Добавить {{count}} общих активных участников",
                "rewardClaimed": "Награда успешно получена",
                "claimFailed": "Не удалось получить награду"
            },
            "telegram": {
                "title": "Официальный Телеграм",
                "joinGroup": "Присоединиться к группе в Телеграм",
                "claimReward": "Получить 4 USDT",
                "inputs": {
                    "username": {
                        "label": "Имя пользователя Телеграм",
                        "placeholder": "Пожалуйста, введите ваше имя пользователя в Телеграм",
                        "validation": {
                            "required": "Имя пользователя Телеграм обязательно"
                        }
                    }
                },
                "rewardInstructions": "Инструкции по получению бонуса за вступление в группу",
                "rewardInstruction1": "Чтобы подать заявку на получение бонуса за вступление в группу, используйте свое имя пользователя в Телеграм.",
                "rewardInstruction2": "Только новые аккаунты имеют право на получение бонуса. Аккаунты, которые уже получили бонус, не могут снова участвовать.",
                "rewardStatuses": {
                    "pendingReview": "Вы уже подали заявку. Пожалуйста, дождитесь отправки бонуса администратором.",
                    "alreadyClaimed": "Бонус уже получен.",
                    "pendingReviewGr": "Бонус за вступление в группу находится на рассмотрении. Убедитесь, что вы присоединились к группе, пока администратор проверяет вашу заявку.",
                    "notInGroup": "Имя пользователя Телеграм, которое вы указали, не найдено в группе. Пожалуйста, отправьте заявку снова. Убедитесь, что вы вступили в группу и указали правильное имя пользователя.",
                    "userNameUsed": "Имя пользователя Телеграм уже используется. Свяжитесь со службой поддержки, если считаете, что это ошибка."
                }
            }
        }
    },
    ar:{
        translation:{
            "global": {
                "copySuccess": "تم النسخ",
                "days": "أيام",
                "insufficientBalance": "رصيد غير كافٍ",
                "wait48hrs": "يرجى الانتظار 48 ساعة بعد تغيير كلمة مرور الأموال لسحبها",
                "pleaseEnter": "يرجى الإدخال",
                "save": "حفظ",
                "ok": "موافق",
                "error": {
                    "invalidCode": "رمز التحقق غير صالح",
                    "tryAgain": "حدث خطأ ما، يرجى المحاولة مرة أخرى لاحقًا"
                },
                "saved": "تم الحفظ",
                "day": "يوم",
                "change": "تغيير",
                "from": "من",
                "to": "إلى",
                "analyze": "تحليل",
                "total": "المجموع",
                "loading": "تحميل",
                "free": "مجاني",
                "ongoingWithdrawal": "لا يمكن معالجة سوى عملية سحب واحدة في كل مرة",
                "waitAfterSuccessWithdraw": "يجب تقديم طلبات السحب اللاحقة بعد 24 ساعة من إتمام عملية السحب السابقة",
                "waitAfterCanceledWithdraw": "يرجى الانتظار 24 ساعة بعد إلغاء عملية السحب قبل طلب أخرى",
                "todaysEarnings": "أرباح اليوم",
                "cumulativeEarnings": "الأرباح التراكمية",
                "myLevel": "مستواي",
                "upgrade": "ترقية",
                "success": "نجاح",
                "stayTuned": "ترقبوا",
                "months": {
                    "mar": "مارس",
                    "apr": "أبريل",
                    "may": "مايو",
                    "jun": "يونيو",
                    "jul": "يوليو",
                    "aug": "أغسطس",
                    "sep": "سبتمبر",
                    "oct": "أكتوبر",
                    "nov": "نوفمبر",
                    "dec": "ديسمبر"
                },
                "people": "أشخاص",
                "views": "مشاهدات"
            },
            "common": {
                "errorOccurred": "حدث خطأ ما"
            },
            "bottomBar": {
                "home": "الرئيسية",
                "team": "مقاطع قصيرة",
                "revenue": "الإيرادات",
                "record": "الفريق",
                "mine": "ملفي"
            },
            "home": {
                "viral": "مقاطع قصيرة",
                "tredningNow": "الآن في الاتجاه",
                "seeMore": "لك",
                "aboutUs": "إشعارات",
                "help": "مركز المساعدة",
                "missionCenter": "شرح الدخل",
                "bonusDescription": "مقدمة عن الشركة",
                 
                "socialMedia": "وسائل التواصل الاجتماعي",
                "joinUs": "انضم إلينا على وسائل التواصل الاجتماعي للبقاء على اطلاع بأحدث المحتويات",
                "leader": "شريك مدينة Eternova Films",
                "home": "الرئيسية",
                "forYou": "لك",
                "inviteFriends": "دعوة الأصدقاء",
                "inviteFriendsText": "ادعُ الأصدقاء لكسب الدخل"
            },
            "about": {
                "title": "حول الشركة"
            },
            "notices": {
                "title": "إشعارات",
                "translation": {
                    "Eternova Films_open": {
                        "title": "مرحبًا بك في Eternova Films",
                        "content": "هل سئمت من التمرير بلا نهاية دون مكافأة؟ تخيل عالمًا يدفع لك فيه وقتك على YouTube بالفعل. إنه هنا. نقدم منصة ثورية تحول عادات المشاهدة الخاصة بك إلى مصدر للدخل السلبي. لفترة طويلة جدًا، قدمنا اهتمامنا مجانًا. لقد قضينا ساعات لا تحصى في استيعاب المحتوى، والضحك، والتعلم، والترفيه، ولكن ما الذي كسبناه حقًا؟ الآن، هذا على وشك التغيير. لقد عقدنا شراكة مع كبار منتجي الأفلام في العالم، لنقدم لك أفلامًا ضخمة ومحتوى حصريًا من وراء الكواليس. لقد قمنا أيضًا بتنسيق أفضل ما في YouTube، وعرضنا أكثر منشئي المحتوى ابتكارًا وجاذبية على هذا الكوكب. هذا ليس مجرد تمرير بلا تفكير؛ إنها تجربة منسقة مصممة للترفيه والتعليم، والأهم من ذلك، مكافأتك. إليك كيفية عملها: ببساطة شاهد المحتوى الذي تحبه، واحصل على أموال مقابل وقتك. لا توجد استطلاعات معقدة، ولا رسوم خفية، فقط دخل سلبي خالص. إنه مفهوم بسيط، ولكنه قوي: اهتمامك له قيمة، ونحن هنا للتأكد من حصولك على تعويض مقابله. فكر في الأمر على أنه استثمار في نفسك. أنت لا تقضي الوقت فحسب؛ أنت تستثمره في مستقبلك. أنت تحول وقت فراغك إلى دخل، وترفيهك إلى أرباح. إنه تحول نموذجي، طريقة جديدة للتفاعل مع العالم الرقمي. هذه ليست مجرد منصة؛ إنه مجتمع من المشاهدين الذين يفهمون قيمة وقتهم. إنه مكان يمكنك فيه اكتشاف محتوى جديد، والتواصل مع الأفراد ذوي التفكير المماثل، وبناء تيار دخل سلبي ينمو معك. لا تقضِ وقتك على YouTube فحسب. استثمره. اكتشف إمكانات طريقة جديدة لكسب المال. انضم إلينا وجرب مستقبل الترفيه والدخل السلبي. وقت المشاهدة الخاص بك قيّم، ونحن هنا للتأكد من أنه يؤتي ثماره. أطلق العنان للإمكانات اليوم. ابدأ في الكسب أثناء المشاهدة."
                    }
                }
            },
            "help": {
                "title": "دروس تعليمية",
                "translation": {
                    "how_to_recharge": {
                        "title": "كيفية إعادة الشحن",
                        "content": "اضغط على 'ملفي' في الشريط السفلي، ثم اضغط على 'إعادة الشحن والسحب'. اضغط على زر 'إعادة الشحن'، وحدد عملة إعادة الشحن والشبكة الرئيسية، ثم انسخ عنوان الإيداع."
                    },
                    "how_to_do_task_long": {
                        "title": "كيفية القيام بمهمة (قسم الفيديو الطويل)",
                        "content": "اضغط على 'VIP' في الشريط السفلي، وابحث عن الحزمة الخاصة بك، واضغط على 'النتيجة' لتلقي الدخل، وحدد مقطع فيديو، ثم اضغط على 'اشتراك'."
                    },
                    "how_to_do_task_shorts": {
                        "title": "كيفية القيام بمهمة (قسم المقاطع القصيرة)",
                        "content": "اضغط على 'مقاطع قصيرة' في الشريط السفلي، وابحث عن الحزمة الخاصة بك، واضغط على 'النتيجة' لتلقي الدخل، وقم بالتمرير لأسفل لعرض مقطع فيديو، ثم اضغط على 'اشتراك'."
                    },
                    "how_to_withdraw": {
                        "title": "كيفية السحب",
                        "content": "اضغط على 'ملفي' في الشريط السفلي، ثم اضغط على 'إعادة الشحن والسحب'. اضغط على زر 'سحب'، وحدد عملة السحب والشبكة الرئيسية، ثم اختر عنوان السحب الخاص بك من قائمة العناوين الخاصة بك. أدخل مبلغ السحب، واضغط على 'تأكيد السحب'، وتحقق من كلمة مرور التمويل الخاصة بك."
                    },
                    "how_to_invite_friends": {
                        "title": "كيفية دعوة الأصدقاء",
                        "content": "اضغط على 'الفريق' في الشريط السفلي، ثم اضغط على 'دعوة صديق'. اضغط على زر 'نسخ' لنسخ رمز الدعوة الخاص بك."
                    },
                    "how_to_register": {
                        "title": "كيفية التسجيل",
                        "content": "انتقل إلى صفحة التسجيل. أدخل اسم المستخدم والبريد الإلكتروني، وحدد رمز بلد رقم هاتفك، وأدخل رقم هاتفك، وأنشئ وقم بتأكيد كلمة المرور الخاصة بك، وأدخل رمز الدعوة، واضغط على سهم 'تسجيل' لإكمال التسجيل."
                    },
                    "how_to_purchase_package_long": {
                        "title": "كيفية شراء حزمة (قسم الفيديو الطويل)",
                        "content": "اضغط على 'VIP' في الشريط السفلي، وحدد الحزمة الخاصة بك، ثم اضغط على 'فتح الآن'."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "كيفية شراء حزمة (قسم المقاطع القصيرة)",
                        "content": "اضغط على 'مقاطع قصيرة' في الشريط السفلي، وحدد الحزمة الخاصة بك، ثم اضغط على 'فتح الآن'."
                    },
                    "how_to_transfer_funds": {
                        "title": "كيفية تحويل الأموال من إعادة الشحن والسحب إلى نقاط الأعضاء",
                        "content": "اضغط على 'ملفي' في الشريط السفلي، ثم اضغط على 'إعادة الشحن والسحب'. اضغط على أيقونة التحويل في أعلى اليمين، وحدد عملة التحويل، وأدخل المبلغ، واضغط على 'تأكيد التحويل'."
                    },
                    "how_to_reset_password": {
                        "title": "كيفية إعادة تعيين كلمة المرور",
                        "content": "انتقل إلى صفحة تسجيل الدخول، واضغط على 'نسيت كلمة المرور'، وأدخل بريدك الإلكتروني، واضغط على 'الحصول على رمز التحقق'، وأدخل الرمز المرسل إلى بريدك الإلكتروني، وأدخل كلمة المرور الجديدة الخاصة بك، واضغط على 'موافق'."
                    },
                    "how_to_change_password": {
                        "title": "كيفية تغيير كلمة المرور",
                        "content": "اضغط على 'ملفي' في الشريط السفلي، واضغط على 'كلمة مرور تسجيل الدخول'، وأدخل بريدك الإلكتروني، واضغط على 'الحصول على رمز التحقق'، وأدخل الرمز المرسل إلى بريدك الإلكتروني، وأدخل وقم بتأكيد كلمة المرور الجديدة الخاصة بك، واضغط على 'موافق'."
                    },
                    "how_to_set_funding_password": {
                        "title": "كيفية تعيين كلمة مرور التمويل",
                        "content": "اضغط على 'ملفي' في الشريط السفلي، واضغط على 'كلمة مرور المعاملة'، وأدخل بريدك الإلكتروني، واضغط على 'الحصول على رمز التحقق'، وأدخل الرمز المرسل إلى بريدك الإلكتروني، وأدخل وقم بتأكيد كلمة مرور التمويل الجديدة الخاصة بك، واضغط على 'موافق'."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "كيفية ربط عنوان السحب",
                        "content": "اضغط على 'ملفي' في الشريط السفلي، ثم اضغط على 'إعادة الشحن والسحب'. اضغط على أيقونة قائمة العناوين في أعلى اليمين، واضغط على 'إضافة عنوان'، وحدد قناة إعادة الشحن والشبكة الرئيسية، وأدخل عنوان السحب الخاص بك، وأدخل بريدك الإلكتروني، واضغط على 'الحصول على رمز التحقق'، وأدخل الرمز المرسل إلى بريدك الإلكتروني، واضغط على 'موافق'."
                    },
                    "how_to_protect_my_account": {
                        "title": "كيفية حماية حسابي",
                        "content": "اضغط على 'ملفي' في الشريط السفلي، ثم اضغط على 'KYC المستخدم'. أدخل جنسيتك، واسمك الحقيقي، وحدد نوع المستند الخاص بك، وأدخل رقم المستند، وقم بتحميل مستنداتك، واضغط على 'إرسال للمراجعة'."
                    }
                }
            },
            "helpDetails": {
                "title": "درس تعليمي"
            },
            "introduction": {
                "title": "شرح الدخل"
            },
            "social": {
                "title": "وسائل التواصل الاجتماعي لـ Eternova Films",
                "offical": "وسائل التواصل الاجتماعي",
                "officalTGChannel": "قناة Telegram الرسمية",
                "officalTGGroup": "مجموعة Telegram الرسمية",
                "subscribers": "المشتركون",
                "join": "انضم",
                "officalIG": "ملف تعريف Instagram الرسمي",
                "follow": "متابعة",
                "followers": "المتابعون",
                "community": "المجتمع",
                "members": "الأعضاء",
                "new": "جديد",
                "errorRegion": "يرجى شراء حزمة للوصول إلى هذه المجموعة."
            },
            "notification": {
                "title": "إشعار",
                "types": {
                    "eventNotification": "إشعار الحدث",
                    "walletMessage": "رسالة المحفظة",
                    "systemNotification": "إشعار النظام"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "طلب السحب",
                        "message": "لقد تقدمت بطلب سحب USDT، يرجى انتظار الموافقة، رقم الطلب: {{order_number}}، المبلغ: {{amount}}، رسوم المعالجة: {{fee}}USDT"
                    },
                    "withdrawal_approve":{
                        "title": "تم إكمال السحب",
                        "message": "تم إكمال عملية السحب الخاصة بك، رقم الطلب: {{order_number}}، المبلغ: {{amount}}، رسوم المعالجة: {{fee}} USDT"
                    }
                }
            },
            "notificationDetails": {
                "title": "إشعار"
            },
            "team": {
                "title": "الفريق",
                "teamMemberListBtn": "قائمة أعضاء الفريق",
                "inviteFriend": "دعوة صديق",
                "inviteFriendInfo": "مشاهدة مستخدمي يوتيوب لبدء كسب الدخل",
                "totalIncome": "إجمالي دخل المستخدم",
                "todayIncome": "دخل اليوم",
                "todayInc": "اليوم",
                "teamTotal": "إجمالي مبلغ الاشتراك للفريق",
                "likesIncome": "دخل الإعجابات",
                "teamIncome": "دخل الفريق",
                "totalReturn": "إجمالي العائد",
                "totalTeamMembers": "إجمالي أعضاء الفريق",
                "addedToday": "أضيف اليوم",
                "firstGeneration": "الجيل الأول",
                "totalMembers": "إجمالي الأعضاء",
                "totalActiveMembers": "نشيط",
                "genTotalIncome": "إجمالي الدخل",
                "secondGeneration": "الجيل الثاني",
                "thirdGeneration": "الجيل الثالث",
                "totalNumberOfFriends": "إجمالي عدد الأصدقاء",
                "activeFriends": "الأصدقاء النشطون"
            },
            "myTeam": {
                "title": "قائمة أعضاء الفريق",
                "id": "المعرف",
                "generation": "الجيل",
                "registrationDate": "تاريخ التسجيل",
                "noResults": "لا توجد نتائج",
                "noMoreResults": "لا توجد نتائج أخرى"
            },
            "invite": {
                "title": "دعوة صديق",
                "headline": "مشاهدة مقاطع الريلز لبدء كسب الدخل",
                "invitationLink": "رابط الدعوة",
                "invitationCode": "رمز الدعوة"
            },
            "revenue": {
                "title": "مركز الأعضاء",
                "specialPackage": "حزم خاصة",
                "currentlevel": "المستوى الحالي",
                "todayEarning": "أرباح اليوم",
                "cumulativeEarning": "الأرباح التراكمية",
                "package": {
                    "view": "عرض",
                    "dailyPerView": "المشاهدات اليومية",
                    "validTime": "الوقت الصالح",
                    "perViewIncome": "الدخل لكل عرض",
                    "scoreBtn": "الحصول على نقاط لكسب الدخل",
                    "openSoon": "يفتح قريبا",
                    "stayTuned": "ترقبوا",
                    "unlockNow": "افتح الآن",
                    "expired": "الحزمة منتهية الصلاحية",
                    "expiresIn": "ينتهي في",
                    "totalReturn": "إجمالي العائد",
                    "dailyReturn": "العائد اليومي"
                },
                "packageDetails": "التفاصيل",
                "packageExplain": "تفاصيل الحزم",
                "buy": {
                    "modal": {
                        "text": "هل أنت متأكد من أنك تريد الشراء؟"
                    }
                }
            },
            "record": {
                "title": "السجل",
                "viewRating": "تقييم العرض",
                "viewEarnings": "أرباح العرض",
                "noMoreRecords": "لا توجد سجلات أخرى"
            },
            "profile": {
                "partner": "نظام ترويج وكلاء Eternova Films",
                "officalWebsite": "رابط الموقع الرسمي",
                "instagramAccount": "حساب انستغرام",
                "userKYC": "التحقق من هوية المستخدم",
                "telegram": "تليجرام",
                "scoreRecord": "سجل النقاط",
                "loginPasswordTab": "كلمة مرور تسجيل الدخول",
                "transactionPasswordTab": "كلمة مرور المعاملة",
                "notification": "إشعار",
                "switchLanguage": "تغيير اللغة",
                "contactCustomerService": "الاتصال بخدمة العملاء",
                "appDownload": "تنزيل التطبيق",
                "logOut": "تسجيل الخروج",
                "rechargeAndWithdraw": "إعادة الشحن والسحب",
                "unreleasedPoint": "النقاط غير المفرج عنها",
                "memberPoint": "نقاط العضو",
                "details": {
                    "title": "معلومات شخصية",
                    "nickname": "اسم مستعار",
                    "enterNickname": "أدخل اسمك المستعار",
                    "gender": "الجنس",
                    "male": "ذكر",
                    "female": "أنثى",
                    "validation": {
                        "nickname": {
                            "required": "الاسم المستعار مطلوب"
                        },
                        "telegram": {
                            "invalid": "اسم مستخدم تليجرام غير صالح"
                        },
                        "whatsapp": {
                            "invalid": "رقم واتساب غير صالح"
                        }
                    },
                    "updatedSuccess": "تم تحديث الملف الشخصي بنجاح"
                },
                "kyc": {
                    "title": "تم التحقق",
                    "errorPassport1": "يرجى تحميل الصورة الأمامية لجواز السفر",
                    "errorPassport2": "يرجى تحميل صورة شخصية تحمل جواز سفرك",
                    "errorID1": "يرجى تحميل الصورة الأمامية لبطاقة الهوية الخاصة بك",
                    "errorID2": "يرجى تحميل الصورة الخلفية لبطاقة الهوية الخاصة بك",
                    "errorID3": "يرجى تحميل صورة شخصية تحمل بطاقة الهوية الخاصة بك",
                    "successMsg": "تم إرسال التحقق من الهوية بنجاح للمراجعة",
                    "errorMsg": "فشل إرسال التحقق من الهوية، يرجى المحاولة مرة أخرى",
                    "inputs": {
                        "nationality": {
                            "label": "الجنسية",
                            "placeholder": "يرجى إدخال الجنسية",
                            "validation": {
                                "required": "الجنسية مطلوبة"
                            }
                        },
                        "name": {
                            "label": "الاسم",
                            "placeholder": "يرجى إدخال اسمك",
                            "validation": {
                                "required": "الاسم مطلوب"
                            }
                        },
                        "documentNumber": {
                            "label": "رقم المستند",
                            "placeholder": "يرجى إدخال رقم الهوية",
                            "validation": {
                                "required": "رقم المستند مطلوب"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "نوع المستند مطلوب"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "أنواع المستندات",
                            "option1": "بطاقة الهوية",
                            "option2": "جواز السفر",
                            "idCard": "بطاقة الهوية",
                            "passport": "جواز السفر"
                        }
                    },
                    "uploadDocument": "تحميل المستند",
                    "frontOfDocument": "واجهة المستند",
                    "backOfDocument": "ظهر المستند",
                    "selfieHoldingDocument": "صورة شخصية تحمل المستند",
                    "actionButton": "إرسال للمراجعة",
                    "kycVerified": "تمت مراجعة معلوماتك والتحقق منها. تم حذف بياناتك الشخصية على الفور. الملف الشخصي نشط مرة أخرى. شكرا لتعاونكم.",
                    "alreadySubmited": "لقد قدمت بالفعل. يرجى الانتظار حتى اكتمال عملية المراجعة.",
                    "underReview": "طلب التحقق الخاص بك قيد المراجعة.",
                    "verified": "اكتمل التحقق من الهوية الخاص بك. تم قبول مستنداتك.",
                    "rejected": "فشل التحقق من الهوية. يرجى إعادة إرسال مستنداتك."
                },
                "loginPassword": {
                    "title": "كلمة مرور تسجيل الدخول",
                    "codeSent": "تم إرسال رمز التحقق بنجاح",
                    "changedSuccess": "تم تغيير كلمة المرور بنجاح",
                    "inputs": {
                        "email": {
                            "label": "عنوان البريد الإلكتروني",
                            "placeholder": "البريد الإلكتروني"
                        },
                        "verifyCode": {
                            "label": "رمز التحقق",
                            "placeholder": "يرجى إدخال رمز التحقق",
                            "sendBtn": "إرسال",
                            "validation": {
                                "required": "رمز التحقق مطلوب"
                            }
                        },
                        "newPassword": {
                            "label": "كلمة المرور الجديدة",
                            "placeholder": "6-20 حرفًا أبجديًا رقميًا",
                            "validation": {
                                "required": "كلمة المرور الجديدة مطلوبة",
                                "min": "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل",
                                "max": "لا يمكن أن تزيد كلمة المرور عن 20 حرفًا"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "أدخل كلمة المرور مرة أخرى للتأكيد",
                            "validation": {
                                "required": "يرجى تأكيد كلمة المرور الخاصة بك",
                                "oneOf": "يجب أن تتطابق كلمات المرور"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "كلمة مرور التمويل",
                    "codeSent": "تم إرسال رمز التحقق بنجاح",
                    "changedSuccess": "تم تغيير كلمة مرور الأموال بنجاح",
                    "inputs": {
                        "email": {
                            "label": "عنوان البريد الإلكتروني",
                            "placeholder": "البريد الإلكتروني"
                        },
                        "verifyCode": {
                            "label": "رمز التحقق",
                            "placeholder": "يرجى إدخال رمز التحقق",
                            "sendBtn": "إرسال",
                            "validation": {
                                "required": "رمز التحقق مطلوب"
                            }
                        },
                        "newPassword": {
                            "label": "كلمة مرور التمويل",
                            "placeholder": "تركيبة من 6 أرقام",
                            "validation": {
                                "required": "كلمة مرور الأموال الجديدة مطلوبة",
                                "matches": "يجب أن تتكون كلمة مرور الأموال من 6 أرقام بالضبط"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "أدخل كلمة المرور مرة أخرى للتأكيد",
                            "validation": {
                                "required": "يرجى تأكيد كلمة المرور الخاصة بك",
                                "oneOf": "يجب أن تتطابق كلمات المرور"
                            }
                        }
                    },
                    "reminder": {
                        "title": "تذكير ودي",
                        "points": {
                            "point1": "يتم استخدام كلمة مرور الأموال الخاصة بك للمعاملات وعمليات السحب وإعدادات أمان الحساب. يوصى بعدم تطابقها مع كلمة مرور تسجيل الدخول. في حال سرقة الحساب الناتج، لن يكون هذا الموقع مسؤولاً.",
                            "point2": "بعد تغيير كلمة مرور الأموال، لا يمكنك سحب الأموال خلال 48 ساعة"
                        }
                    }
                },
                
                
            },
            "wallet": {
                "title": "إعادة الشحن والسحب",
                "totalAssets": "إجمالي الأصول",
                "recharge": "إعادة الشحن",
                "withdraw": "سحب",
                "transfer": "تحويل",
                "assetDetails": "تفاصيل الأصول",
                "cancelWithdrawal": "إلغاء السحب",
                "filters": {
                    "all": "الكل",
                    "recharge": "إعادة الشحن",
                    "transfer": "تحويل",
                    "withdraw": "سحب",
                    "levelPurchase": "شراء المستوى",
                    "taskReward": "مكافأة المهمة",
                    "teamCommission": "عمولة الفريق",
                    "bonus": "مكافأة",
                    "salary": "راتب"
                },
                "timeRange": {
                    "title": "حدد النطاق الزمني"
                },
                "status": {
                    "completed": "مكتمل",
                    "rejected": "مرفوض",
                    "processing": "قيد المعالجة",
                    "userCancel": "تم الإلغاء بواسطة المستخدم",
                    "scheduled": "مجدول",
                    "shouldArriveBy": "يجب أن يصل بحلول",
                    "requiresAction": "يحتاج إلى اهتمام",
                    "requiresActionContact": "يرجى إكمال التحقق من الهوية للمتابعة في عملية السحب."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "هل أنت متأكد من أنك تريد إلغاء السحب؟"
                    }
                }
            },
            "withdraw": {
                "title": "سحب الأصول",
                "currentlyAvailableAssets": "الأصول المتاحة حاليًا",
                "selectCurrency": "اختر العملة",
                "mainnet": "الشبكة الرئيسية",
                "withdrawalAddress": "عنوان السحب",
                "withdrawalAddressPL": "يرجى إدخال عنوان السحب",
                "withdrawalAmount": "مبلغ السحب",
                "withdrawalAmountAllowed": "المبلغ المسموح به بين",
                "withdrawalAmountEnter": "أدخل المبلغ",
                "all": "الكل",
                "fees": "رسوم",
                "incomeTax": "ضريبة الدخل",
                "actualArrival": "الوصول الفعلي",
                "confirmWithdrawal": "تأكيد السحب",
                "withdrawalInstructions": "تعليمات السحب",
                "withdrawalInstruction1": "وقت الوصول: سيتم إكمال طلب السحب في غضون 1-72 ساعة.",
                "withdrawalInstruction2": "فترة السحب: يستغرق 24 ساعة بعد كل وصول ناجح لبدء السحب.",
                "withdrawalInstruction3": "يتم فرض رسوم معالجة قدرها 1 USDT لكل عملية سحب.",
                "withdrawalInstruction4": "معيار الضريبة",
                "withdrawalInstruction5": "1000 USDT وما فوق: معفاة من الضرائب",
                "withdrawalInstruction6": "لا يمكن بدء طلبات السحب اللاحقة قبل استلام السحب الأول.",
                "withdrawalInstruction7": "الحد الأدنى لمبلغ السحب: 10 USDT (يجب أن يكون المبلغ عددًا صحيحًا، مثل: 10، 20، 30 USDT).",
                "validation": {
                    "address": {
                        "required": "عنوان السحب مطلوب"
                    },
                    "amount": {
                        "required": "يرجى إدخال مبلغ السحب",
                        "invalid": "يرجى إدخال مبلغ السحب",
                        "min": "الحد الأدنى لمبلغ السحب هو 10 USDT",
                        "max": "الحد الأقصى لمبلغ السحب هو 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "تحويل",
                "transferSuccessfully": "تم التحويل بنجاح",
                "transferCurrency": "عملة التحويل",
                "rechargeAndWithdraw": "إعادة الشحن والسحب",
                "balance": "الرصيد",
                "memberPoint": "نقاط العضو",
                "transferAmount": "مبلغ التحويل",
                "all": "الكل",
                "confirmTransfer": "تأكيد التحويل",
                "enterAmount": "يرجى إدخال مبلغ التحويل",
                "validation": {
                    "amount": {
                        "required": "يرجى إدخال مبلغ التحويل",
                        "invalid": "المبلغ مطلوب",
                        "min": "الحد الأدنى لمبلغ التحويل هو 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "إيداع الأصول",
                "selectCurrency": "اختر العملة",
                "mainnet": "الشبكة الرئيسية",
                "saveQRcode": "حفظ رمز الاستجابة السريعة",
                "depositAddress": "عنوان الإيداع",
                "note": "ملاحظة",
                "depositInstructions": "تعليمات الإيداع",
                "instructions": [
                    "قبل المتابعة، يرجى التأكد من أن نوع العملة المشفرة والشبكة الرئيسية ومعلومات العنوان دقيقة.",
                    "الحد الأدنى لمبلغ الإيداع هو 8 USDT؛ الإيداعات التي تقل عن هذا المبلغ لن يتم إضافتها.",
                    "لا تقم بإيداع أصول أخرى غير USDT أو USDC إلى هذا العنوان، حيث لا يمكن استرداد الأموال.",
                    "احصل دائمًا على أحدث عنوان إيداع قبل كل معاملة لضمان أمان الأموال، حيث يتم تحديث العناوين بشكل دوري."
                ]
            },
            "unreleased": {
                "title": "النقاط غير المفرج عنها",
                "desc": "وصف الأموال المراد الإفراج عنها",
                "burn": "حرق",
                "burnCause": "مكافآت الدعوة الأقل من حصة الصديق ستسبب الحرق",
                "friendshipLevel": "مستوى الصداقة",
                "release": "إفراج",
                "releaseCondition": "مساوٍ أو أعلى من المبلغ الذي يمكن الإفراج عنه من قبل الأصدقاء",
                "info1": "الأموال المراد الإفراج عنها ترجع إلى المستوى الحالي الأقل من مستوى الأصدقاء في الفريق، وقد تم حرق مكافأة الدعوة.",
                "info2": "عندما يقوم المستخدم بالترقية ليكون مساويًا أو أعلى من مستوى صديق الفريق، يمكنه الحصول على هذا الجزء من المبلغ المراد الإفراج عنه.",
                "toBeReleased": "الحصة المراد الإفراج عنها"
            },
            "memberPoint": {
                "title": "نقاط العضو",
                "totalAssets": "إجمالي الأصول",
                "assetDeposit": "إيداع الأصول",
                "assetDetails": "تفاصيل الأصول"
            },
            "appDownload": {
                "title": "تنزيل التطبيق",
                "subtitle": "قم بتنزيل التطبيق للحصول على تجربة أفضل",
                "googlePlay": {
                    "label": "تنزيل من متجر Google Play"
                },
                "appStore": {
                    "label": "تنزيل من متجر Apple Store"
                },
                "note": "ملاحظة: أثناء عملية التنزيل والتثبيت، إذا كان هناك فشل في التنزيل، أو فشل في تحليل حزمة التثبيت، أو استثناء في التثبيت، يرجى التنزيل والتثبيت مرة أخرى"
            },
            "login": {
                "tabs": {
                    "username": "تسجيل الدخول باسم المستخدم",
                    "email": "تسجيل الدخول بالبريد الإلكتروني"
                },
                "inputs": {
                    "username": {
                        "placeholder": "اسم المستخدم",
                        "validation": {
                            "required": "اسم المستخدم مطلوب",
                            "min": "يجب أن يتكون اسم المستخدم من 3 أحرف على الأقل"
                        }
                    },
                    "email": {
                        "placeholder": "البريد الإلكتروني",
                        "validation": {
                            "required": "البريد الإلكتروني مطلوب",
                            "invalid": "تنسيق بريد إلكتروني غير صالح"
                        }
                    },
                    "password": {
                        "label": "كلمة المرور",
                        "placeholder": "كلمة المرور",
                        "validation": {
                            "required": "كلمة المرور مطلوبة",
                            "min": "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"
                        },
                        "show": "إظهار كلمة المرور",
                        "hide": "إخفاء كلمة المرور"
                    }
                },
                "links": {
                    "forgot": "هل نسيت كلمة المرور؟",
                    "register": {
                        "text": "لا يوجد حساب؟",
                        "link": "سجل الآن"
                    }
                },
                "buttons": {
                    "login": "تسجيل الدخول"
                },
                "success": "تم بنجاح",
                "terms": {
                    "validation": {
                        "required": "يجب عليك قبول الشروط والأحكام"
                    }
                },
                "errors": {
                    "userNotFound": "المستخدم غير موجود",
                    "wrongPassword": "كلمة مرور غير صحيحة"
                }
            },
            "register": {
                "title": "تسجيل",
                "inputs": {
                    "username": {
                        "placeholder": "اسم المستخدم",
                        "validation": {
                            "required": "اسم المستخدم مطلوب",
                            "min": "يجب أن يتكون اسم المستخدم من 5 أحرف على الأقل",
                            "matches": "يجب أن يبدأ اسم المستخدم بحرف، ويمكن أن يحتوي فقط على أحرف أو أرقام أو '_' أو '.'، ولا يمكن أن يبدأ أو ينتهي بحرف خاص أو رقم."
                        }
                    },
                    "email": {
                        "placeholder": "عنوان البريد الإلكتروني",
                        "validation": {
                            "required": "البريد الإلكتروني مطلوب",
                            "invalid": "تنسيق بريد إلكتروني غير صالح"
                        }
                    },
                    "phone": {
                        "placeholder": "رقم الهاتف المحمول",
                        "validation": {
                            "required": "رقم الهاتف مطلوب",
                            "digits": "يجب أن يحتوي رقم الهاتف على أرقام فقط"
                        }
                    },
                    "password": {
                        "placeholder": "كلمة مرور تسجيل الدخول",
                        "validation": {
                            "required": "كلمة المرور مطلوبة",
                            "min": "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "تأكيد كلمة المرور",
                        "validation": {
                            "required": "يرجى تأكيد كلمة المرور الخاصة بك",
                            "match": "يجب أن تتطابق كلمات المرور"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "رمز الدعوة",
                        "validation": {
                            "required": "رمز الدعوة مطلوب"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "البريد الإلكتروني قيد الاستخدام بالفعل",
                    "usernameTaken": "اسم المستخدم قيد الاستخدام بالفعل",
                    "invalidReferral": "رمز الإحالة غير صالح"
                },
                "buttons": {
                    "register": "تسجيل"
                },
                "terms": {
                    "validation": {
                        "required": "يجب عليك قبول الشروط والأحكام"
                    }
                },
                "links": {
                    "login": {
                        "text": "هل لديك حساب بالفعل؟",
                        "link": "تسجيل الدخول الآن"
                    }
                },
                "success": "تم التسجيل بنجاح",
                "countrySelector": {
                    "title": "اختر الدولة"
                }
            },
            "terms": {
                "part1": "بالاستمرار في استخدام حساب موجود في المملكة المتحدة، فإنك توافق على",
                "part2": "شروط الخدمة",
                "part3": "وتقر بأنك قرأت",
                "part4": "سياسة الخصوصية.",
                "title": "سياسة الخصوصية لـ Eternova Films"
            },
            "areaCode": {
                "label": "اختر رمز المنطقة"
            },
            "forgetPassword": {
                "title": "نسيت كلمة المرور",
                "inputs": {
                    "email": {
                        "label": "البريد الإلكتروني",
                        "placeholder": "بريدك الإلكتروني",
                        "validation": {
                            "required": "البريد الإلكتروني مطلوب",
                            "invalid": "تنسيق بريد إلكتروني غير صالح"
                        }
                    },
                    "verificationCode": {
                        "label": "رمز التحقق",
                        "placeholder": "يرجى إدخال رمز التحقق",
                        "validation": {
                            "required": "رمز التحقق مطلوب"
                        },
                        "button": "الحصول على رمز التحقق"
                    },
                    "newPassword": {
                        "label": "كلمة المرور الجديدة",
                        "placeholder": "يرجى إدخال كلمة مرور جديدة",
                        "validation": {
                            "required": "كلمة المرور الجديدة مطلوبة",
                            "min": "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"
                        },
                        "show": "إظهار كلمة المرور",
                        "hide": "إخفاء كلمة المرور"
                    }
                },
                "buttons": {
                    "reset": "إعادة تعيين"
                },
                "alerts": {
                    "emailRequired": "يرجى إدخال بريد إلكتروني صالح",
                    "codeSent": "تم إرسال رمز التحقق إلى بريدك الإلكتروني",
                    "sendError": "فشل إرسال الرمز",
                    "restSuccess": "تمت إعادة تعيين كلمة المرور بنجاح. يرجى تسجيل الدخول.",
                    "emailNotFound": "البريد الإلكتروني غير موجود",
                    "codeExpired": "الرمز منتهي الصلاحية"
                }
            },
            "verifyFundsPassword": {
                "title": "التحقق من كلمة مرور الأموال",
                "inputs": {
                    "fundsPassword": {
                        "label": "كلمة مرور الأموال",
                        "placeholder": "أدخل كلمة مرور الأموال",
                        "validation": {
                            "required": "كلمة مرور الأموال مطلوبة",
                            "matches": "يجب أن تتكون كلمة مرور الأموال من 6 أرقام بالضبط"
                        }
                    }
                },
                "buttons": {
                    "verify": "تحقق"
                },
                "alerts": {
                    "noFundsPassword": "يرجى ربط كلمة مرور المعاملة",
                    "checkError": "حدث خطأ أثناء التحقق من كلمة مرور الأموال",
                    "purchaseSuccess": "تم شراء الحزمة بنجاح",
                    "withdrawalSuccess": "تم طلب السحب بنجاح",
                    "insufficientBalance": "رصيد غير كافٍ",
                    "transferToTask": "يرجى تحويل رصيدك من السحب إلى نقاط الأعضاء",
                    "invalidPurchase": "بدء شراء غير صالح",
                    "incorrectPassword": "كلمة مرور الأموال غير صحيحة",
                    "purchaseError": "حدث خطأ أثناء الشراء",
                    "wait48Hours": "يرجى الانتظار 48 ساعة بعد تغيير كلمة مرور الأموال للسحب",
                    "unauthorizedRequest": "طلب غير مصرح به",
                    "generalError": "حدث خطأ، يرجى المحاولة مرة أخرى لاحقًا",
                    "tooManyAttempts": "محاولات كثيرة جدًا، يرجى المحاولة مرة أخرى لاحقًا"
                }
            },
            "setFundsPassword": {
                "title": "تعيين كلمة مرور الأموال",
                "inputs": {
                    "fundsPassword": {
                        "label": "كلمة مرور الأموال",
                        "placeholder": "تعيين كلمة مرور الأموال",
                        "validation": {
                            "required": "كلمة مرور الأموال مطلوبة",
                            "matches": "يجب أن تتكون كلمة مرور الأموال من 6 أرقام بالضبط"
                        }
                    },
                    "confirmPassword": {
                        "label": "تأكيد كلمة مرور الأموال",
                        "placeholder": "تأكيد كلمة مرور الأموال",
                        "validation": {
                            "required": "يرجى تأكيد كلمة مرور الأموال الخاصة بك",
                            "matches": "يجب أن تتطابق كلمات المرور"
                        }
                    }
                },
                "buttons": {
                    "save": "حفظ"
                },
                "alerts": {
                    "success": "تم تعيين كلمة مرور الأموال بنجاح",
                    "error": "حدث خطأ أثناء تعيين كلمة مرور الأموال"
                }
            },
            "lang": {
                "title": "تغيير اللغة"
            },
            "reels": {
                "missionAreaLabel": "منطقة المهام",
                "errors": {
                    "selectValidPackage": "يرجى تحديد مهمة VIP",
                    "dailyLimitReached": "تم الوصول إلى الحد",
                    "notPurchased": "حزمة غير صالحة",
                    "packageExpired": "انتهت صلاحية الحزمة",
                    "alreadyLiked": "تم الاشتراك بالفعل"
                },
                "loading": "جارٍ تحميل المزيد من مقاطع الفيديو...",
                "allSeen": "لقد شاهدت جميع مقاطع الفيديو المتاحة",
                "comments": {
                    "label": "التعليقات",
                    "stayTuned": "قريبًا",
                    "stayTunedMsg": "نحن نعمل على توفير التعليقات لك!"
                },
                "share": {
                    "label": "مشاركة هذا الفيديو"
                },
                "notInYourRegion": {
                    "comments": "التعليق غير متاح في منطقتك بعد",
                    "share": "المشاركة غير متاحة في منطقتك بعد",
                    "save": "الحفظ غير متاح في منطقتك بعد",
                    "actions": "الإجراءات غير متاحة في منطقتك بعد",
                    "follow": "المتابعة غير متاحة في منطقتك بعد"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "منطقة مهام VIP"
                    }
                },
                "share": "مشاركة",
                "dislike": "عدم الإعجاب",
                "remix": "ريمكس"
            },
            "agentPromotion": {
                "title": "نظام ترويج الوكالة",
                "teamSize": "حجم الفريق",
                "nextStageTeamSize": "حجم فريق المرحلة التالية",
                "nextStageGroupPromotionReward": "مكافأة ترويج المجموعة للمرحلة التالية",
                "taskList": "قائمة المهام",
                "firstGenInvite": "دعوة عضو من المستوى الأول",
                "secondGenInvite": "دعوة عضو ثانوي",
                "thirdGenInvite": "دعوة عضو من المستوى الثالث",
                "lastWeekIncrease": "زيادة الأسبوع الماضي",
                "thisWeekIncrease": "زيادة هذا الأسبوع",
                "available": "متاح",
                "receiveBtn": "استلام",
                "levels": {
                    "beginnerCreator": "مبتدئ مبدع",
                    "skilledSpecialist": "أخصائي ماهر",
                    "seniorSpecialist": "أخصائي أول",
                    "supervisor": "مشرف",
                    "seniorSupervisor": "مشرف أول",
                    "regionalManager": "مدير إقليمي",
                    "seniorManager": "مدير أول"
                }
            },
            "addressList": {
                "title": "قائمة العناوين",
                "addAddressBtn": "إضافة عنوان",
                "bidingAddress": {
                    "title": "ربط العنوان",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "قناة إعادة الشحن"
                        },
                        "mainnet": {
                            "label": "الشبكة الرئيسية"
                        },
                        "address": {
                            "label": "العنوان",
                            "placeholder": "يرجى إدخال العنوان",
                            "validation": {
                                "required": "لا يمكن أن يكون العنوان فارغًا"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "العنوان غير صالح، يرجى إدخال عنوان USDT-TRC20 الصحيح",
                        "singleAddressLimit": "يُسمح بربط عنوان واحد فقط، إذا كنت بحاجة إلى التغيير، يرجى الاتصال بخدمة العملاء",
                        "addressAlreadyExists": "العنوان موجود بالفعل، يرجى عدم إضافته مرة أخرى"
                    },
                    "successBound": "تم ربط العنوان بنجاح"
                },
                "pleaseSelectAddress": "يرجى تحديد عنوان",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "هذا العنوان قيد الاستخدام بالفعل. إذا كنت بحاجة إلى تغييره، يرجى الاتصال بخدمة العملاء."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "تذكير ودي"
                },
                "content": {
                    "deleteAddress": {
                        "main": "تأكيد حذف العنوان"
                    }
                }
            },
            "watch": {
                "title": "يوتيوب",
                "cantDislike": "عدم الإعجاب غير مسموح به",
                "subscribe": "اشتراك",
                "subscribed": "مشترك",
                "subscribing": "جارٍ الاشتراك",
                "views": "مشاهدات",
                "explore": "استكشاف"
            },
            "shortsRevenue": {
                "title": "مقاطع قصيرة"
            },
            "telegram": {
                "title": "تيليجرام الرسمي",
                "joinGroup": "انضم إلى مجموعة تيليجرام",
                "claimReward": "احصل على 4 USDT",
                "inputs": {
                    "username": {
                        "label": "اسم مستخدم تيليجرام",
                        "placeholder": "الرجاء إدخال اسم مستخدم تيليجرام الخاص بك",
                        "validation": {
                            "required": "اسم مستخدم تيليجرام مطلوب"
                        }
                    }
                },
                "rewardInstructions": "تعليمات مكافأة الانضمام إلى المجموعة",
                "rewardInstruction1": "للتقديم للحصول على مكافأة الانضمام إلى المجموعة، يرجى استخدام اسم مستخدم تيليجرام الخاص بك.",
                "rewardInstruction2": "فقط الحسابات الجديدة مؤهلة للحصول على المكافأة. الحسابات التي حصلت عليها مسبقًا غير مؤهلة للحصول على مكافأة الانضمام إلى المجموعة.",
                "rewardStatuses": {
                    "pendingReview": "لقد قمت بالتقديم بالفعل. يرجى الانتظار حتى يرسل المشرف المكافأة.",
                    "alreadyClaimed": "تم استلام المكافأة بالفعل.",
                    "pendingReviewGr": "مكافأة الانضمام إلى المجموعة قيد المراجعة. تأكد من أنك قد انضممت إلى المجموعة أثناء مراجعة المشرف لطلبك.",
                    "notInGroup": "اسم مستخدم تيليجرام الذي أدخلته غير موجود في المجموعة. يرجى التقديم مرة أخرى. تأكد من أنك قد انضممت إلى المجموعة وأن اسم مستخدم تيليجرام الخاص بك صحيح.",
                    "userNameUsed": "اسم مستخدم تيليجرام مستخدم بالفعل. يرجى التواصل مع خدمة العملاء إذا كنت تعتقد أن هناك خطأ."
                }
            }
            
        },
        
    }
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
