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
                    "jan": "Jan",
                    "feb": "Feb",
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
                "people": "People",
                "views": "Views",
                "dontRepeat": "Please do not repeat the request",
                "sending": "Sending",
                "cancel": "Cancel",
                "confirm": "Confirm",
                "selectCategory": "Select Category",
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
                    "withdrawal_approve": {
                        "title": "Withdrawal Completed",
                        "message": "Your withdrawal has been completed, order number: {{order_number}}, amount: {{amount}}, handling fee: {{fee}}USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC Submitted",
                        "message": "Your KYC has been submitted for review"
                    },
                    "kyc_approved": {
                        "title": "KYC Approved",
                        "message": "Your KYC has been approved"
                    },
                    "kyc_rejected": {
                        "title": "KYC Rejected",
                        "message": "Your KYC has been rejected"
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
                "noResults": "No results",
                "noMoreResults": "No more results"
            },
            "invite": {
                "title": "Invite Friend",
                "headline": "Watching movies to start earning income",
                "invitationLink": "Invitation Link",
                "invitationCode": "Invitation Code"
            },
            "revenueMusic": {
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
                    "categories": {
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
                    "alreadySubmited": "You've already submitted. Please wait for the review process to complete",
                    "underReview": "Your verification request is under review",
                    "verified": "Your KYC verification is complete. Your documents have been accepted.",
                    "rejected": "KYC verification failed. Please resubmit your documents.",
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
                "noResults": "No results found",
                "totalAssets": "Total Assets",
                "recharge": "Recharge",
                "withdraw": "Withdraw",
                "transfer": "Transfer",
                "assetDetails": "Asset Details",
                "cancelWithdrawal": "Cancel withdrawal",
                "addresses": "Address",
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
                "withdrawalInstruction7": "Minimum withdrawal amount: 15 USDT.",
                "validation": {
                    "address": {
                        "required": "Withdrawal address is required"
                    },
                    "amount": {
                        "required": "Please enter the withdrawal amount",
                        "invalid": "Please enter the withdrawal amount",
                        "min": "Minimum withdrawal amount is 15 USDT",
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
                    "alreadyLiked": "Already watched"
                },

                "popup": {
                    "selectVipMission": {
                        "title": "VIP Mission Area"
                    }
                },
            },
            "agentPromotion": {
                "title": "Agency Promotion System",
                "teamSize": "Team size",
                "nextStageTeamSize": "Next stage team size",
                "nextStageGroupPromotionReward": "Next stage group promotion reward",
                "taskList": "Task List",
                "firstGenInvite": "Invite a first-level member",
                "secondGenInvite": "Invite a secondary member",
                "thirdGenInvite": "Invite a third-level member",
                "lastWeekIncrease": "Last week's increase",
                "thisWeekIncrease": "This week's increase",
                "available": "Available",
                "receiveBtn": "Receive",
                "levels": {
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
    ar: {
        translation: {
            "global": {
                "copySuccess": "تم النسخ",
                "days": "أيام",
                "insufficientBalance": "رصيد غير كافٍ",
                "wait48hrs": "يرجى الانتظار 48 ساعة بعد تغيير كلمة مرور الأموال للسحب",
                "pleaseEnter": "الرجاء إدخال",
                "save": "حفظ",
                "ok": "موافق",
                "error": {
                    "invalidCode": "رمز التحقق غير صالح",
                    "tryAgain": "حدث خطأ ما، يرجى المحاولة مرة أخرى لاحقاً"
                },
                "saved": "تم الحفظ",
                "day": "يوم",
                "change": "تغيير",
                "from": "من",
                "to": "إلى",
                "analyze": "تحليل",
                "total": "الإجمالي",
                "loading": "جاري التحميل",
                "free": "مجاني",
                "ongoingWithdrawal": "يمكن معالجة عملية سحب واحدة فقط في كل مرة",
                "waitAfterSuccessWithdraw": "يجب تقديم طلبات السحب اللاحقة بعد 24 ساعة من إتمام عملية السحب السابقة",
                "waitAfterCanceledWithdraw": "يرجى الانتظار 24 ساعة بعد إلغاء عملية سحب قبل طلب عملية أخرى",
                "todaysEarnings": "أرباح اليوم",
                "cumulativeEarnings": "الأرباح التراكمية",
                "myLevel": "مستواي",
                "upgrade": "ترقية",
                "success": "نجاح",
                "stayTuned": "ترقبوا",
                "months": {
                    "jan": "يناير",
                    "feb": "فبراير",
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
                "views": "مشاهدات",
                "dontRepeat": "يرجى عدم تكرار الطلب",
                "sending": "جاري الإرسال",

                "cancel": "إلغاء",
                "confirm": "تأكيد",
                "selectCategory": "اختر فئة"

            },
            "common": {
                "errorOccurred": "حدث خطأ"
            },
            "bottomBar": {
                "home": "الرئيسية",
                "team": "الفريق",
                "revenue": "الدخل",
                "record": "موسيقى",
                "mine": "ملفي"
            },
            "home": {
                "viral": "مقاطع قصيرة",
                "tredningNow": "أفلام رائجة",
                "seeMore": "عرض المزيد",
                "aboutUs": "من نحن",
                "help": "مساعدة",
                "missionCenter": "مركز المهام",
                "bonusDescription": "وصف المكافأة",
                "socialMedia": "وسائل التواصل الاجتماعي",
                "joinUs": "انضم إلى مجموعة تليجرام الرسمية لـ Eternova Films واحصل على مكافأة 1 USDT.",
                "leader": "شريك مدينة Eternova Films",
                "home": "الرئيسية",
                "forYou": "لك",
                "inviteFriends": "دعوة الأصدقاء",
                "inviteFriendsText": "ادعُ الأصدقاء لكسب الدخل",
                "annoucments": [
                    "مرحباً بكم في Eternova Films! أنشئ وشارك واكسب من فيديوهاتك القصيرة."
                ]
            },
            "about": {
                "title": "حول الشركة"
            },
            "notices": {
                "title": "إشعارات",
                "translation": {
                    "eternovafilms_open": {
                        "title": "مرحباً بكم في Eternova Films",
                        "content": "نحن متحمسون لانضمامك إلى مجتمعنا. Eternova Films هي أكثر من مجرد منصة - إنها مسرح تتألق فيه السينما والموسيقى والإبداع معًا. هنا ستكتشف قصصًا قوية وعروضًا لا تُنسى وفرصًا للنمو جنبًا إلى جنب مع جمهور عالمي من الحالمين والمبدعين. سواء كنت هنا للاستمتاع بالأفلام أو استكشاف الموسيقى أو المشاركة في مشاريع جديدة، فإن رحلتك تبدأ الآن. شكرًا لك على دخول هذا العالم معنا - معًا نبني شيئًا خالدًا. انضم إلى مجموعة تليجرام الرسمية واحصل على مكافأة 1 USDT اليوم!"
                    }
                }
            },
            "help": {
                "title": "مركز المساعدة",
                "translation": {
                    "how_to_recharge": {
                        "title": "كيفية إعادة الشحن",
                        "content": "افتح 'ملفي' من الشريط السفلي. اذهب إلى 'شحن وسحب' ← 'شحن'. اختر عملتك والشبكة الرئيسية، ثم انسخ عنوان الإيداع."
                    },
                    "how_to_do_task_movie": {
                        "title": "كيفية تنفيذ مهمة فيلم",
                        "content": "افتح 'الدخل'. ابحث عن باقتك، اضغط على 'تقييم' لجمع الدخل، اختر فيديو، ثم قم بالإعجاب به."
                    },
                    "how_to_do_task_music": {
                        "title": "كيفية تنفيذ مهمة موسيقى",
                        "content": "افتح 'موسيقى'. ابحث عن باقتك، اضغط على 'تقييم' لجمع الدخل، اختر فيديو، ثم قم بالإعجاب به."
                    },
                    "how_to_withdraw": {
                        "title": "كيفية السحب",
                        "content": "افتح 'ملفي' ← 'شحن وسحب' ← 'سحب'. اختر العملة والشبكة الرئيسية، اختر عنوانًا محفوظًا، أدخل المبلغ، اضغط على 'تأكيد السحب'، ثم تحقق باستخدام كلمة مرور التمويل الخاصة بك."
                    },
                    "how_to_invite_friends": {
                        "title": "كيفية دعوة الأصدقاء",
                        "content": "اذهب إلى 'الفريق' ← 'دعوة صديق'. اضغط على 'نسخ' لنسخ رمز الدعوة الخاص بك."
                    },
                    "how_to_register": {
                        "title": "كيفية التسجيل",
                        "content": "في صفحة التسجيل: أدخل اسم المستخدم والبريد الإلكتروني، اختر رمز بلدك، أدخل رقم هاتفك، أنشئ كلمة مرور وأكدها، أضف رمز الدعوة، ثم اضغط على سهم 'التسجيل'."
                    },
                    "how_to_purchase_package_long": {
                        "title": "كيفية شراء باقة (قسم الفيديوهات الطويلة)",
                        "content": "افتح 'VIP'، اختر باقة، ثم اضغط على 'فتح الآن'."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "كيفية شراء باقة (قسم المقاطع القصيرة)",
                        "content": "افتح 'مقاطع قصيرة'، اختر باقة، ثم اضغط على 'فتح الآن'."
                    },
                    "how_to_transfer_funds": {
                        "title": "كيفية تحويل الأموال من الشحن والسحب إلى نقاط الأعضاء",
                        "content": "افتح 'ملفي' ← 'شحن وسحب'. اضغط على أيقونة التحويل (أعلى اليمين)، اختر العملة، أدخل المبلغ، ثم اضغط على 'تأكيد التحويل'."
                    },
                    "how_to_reset_password": {
                        "title": "كيفية إعادة تعيين كلمة المرور",
                        "content": "في شاشة تسجيل الدخول، اضغط على 'هل نسيت كلمة المرور؟'. أدخل بريدك الإلكتروني، اضغط على 'الحصول على رمز التحقق'، أدخل الرمز من بريدك الإلكتروني، عيّن كلمة مرور جديدة، ثم اضغط على 'موافق'."
                    },
                    "how_to_change_password": {
                        "title": "كيفية تغيير كلمة المرور",
                        "content": "افتح 'ملفي' ← 'كلمة مرور تسجيل الدخول'. أدخل بريدك الإلكتروني، اضغط على 'الحصول على رمز التحقق'، أدخل الرمز، عيّن وأكد كلمة المرور الجديدة، ثم اضغط على 'موافق'."
                    },
                    "how_to_set_funding_password": {
                        "title": "كيفية تعيين كلمة مرور التمويل",
                        "content": "افتح 'ملفي' ← 'كلمة مرور المعاملات'. أدخل بريدك الإلكتروني، اضغط على 'الحصول على رمز التحقق'، أدخل الرمز، عيّن وأكد كلمة مرور التمويل، ثم اضغط على 'موافق'."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "كيفية ربط عنوان السحب",
                        "content": "افتح 'ملفي' ← 'شحن وسحب'. افتح قائمة العناوين ← 'إضافة عنوان'. اختر القناة والشبكة الرئيسية، أدخل عنوان السحب، تحقق عبر رمز البريد الإلكتروني، ثم اضغط على 'موافق'."
                    },
                    "how_to_protect_my_account": {
                        "title": "كيفية حماية حسابي",
                        "content": "افتح 'ملفي' ← 'توثيق هوية المستخدم (KYC)'. أدخل الجنسية والاسم الحقيقي، اختر نوع المستند، املأ رقم المستند، ارفع المستندات، ثم اضغط على 'إرسال للمراجعة'."
                    }
                }
            },
            "helpDetails": {
                "title": "تعليمات"
            },
            "introduction": {
                "title": "شرح الدخل"
            },
            "social": {
                "title": "وسائل التواصل الاجتماعي لـ Eternova Films",
                "offical": "وسائل التواصل",
                "officalTGChannel": "قناة تليجرام الرسمية",
                "officalTGGroup": "مجموعة تليجرام الرسمية",
                "subscribers": "مشتركين",
                "join": "انضمام",
                "officalIG": "حساب إنستغرام الرسمي",
                "follow": "متابعة",
                "followers": "متابعين",
                "community": "مجتمع",
                "members": "أعضاء",
                "new": "جديد",
                "errorRegion": "يرجى شراء باقة للوصول إلى هذه المجموعة."
            },
            "notification": {
                "title": "الإشعارات",
                "types": {
                    "eventNotification": "إشعار حدث",
                    "walletMessage": "رسالة المحفظة",
                    "systemNotification": "إشعار النظام"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "طلب سحب",
                        "message": "لقد طلبت سحب USDT، يرجى انتظار الموافقة، رقم الطلب: {{order_number}}، المبلغ: {{amount}}، رسوم المعالجة: {{fee}} USDT"
                    },
                    "withdrawal_approve": {
                        "title": "اكتمل السحب",
                        "message": "لقد اكتمل سحبك، رقم الطلب: {{order_number}}، المبلغ: {{amount}}، رسوم المعالجة: {{fee}} USDT"
                    },
                    "kyc_submitted": {
                        "title": "تم تقديم التحقق من الهوية",
                        "message": "تم تقديم التحقق من الهوية الخاص بك للمراجعة"
                    },
                    "kyc_approved": {
                        "title": "تمت الموافقة على التحقق من الهوية",
                        "message": "تمت الموافقة على التحقق من الهوية الخاص بك"
                    },
                    "kyc_rejected": {
                        "title": "تم رفض التحقق من الهوية",
                        "message": "تم رفض التحقق من الهوية الخاص بك"
                    }
                }
            },
            "notificationDetails": {
                "title": "الإشعارات"
            },
            "team": {
                "title": "الفريق",
                "benefitAnalysis": "تحليل الفوائد",
                "investmentIncome": "دخل الاستثمار",
                "teamMemberListBtn": "قائمة أعضاء الفريق",
                "inviteFriend": "دعوة صديق",
                "inviteFriendInfo": "شاهد الأفلام لتبدأ في كسب الدخل",
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
                "totalActiveMembers": "نشط",
                "genTotalIncome": "إجمالي الدخل",
                "secondGeneration": "الجيل الثاني",
                "thirdGeneration": "الجيل الثالث",
                "fourthGeneration": "الجيل الرابع",
                "fifthGeneration": "الجيل الخامس",
                "totalNumberOfFriends": "إجمالي عدد الأصدقاء",
                "activeFriends": "الأصدقاء النشطون"
            },
            "myTeam": {
                "title": "قائمة أعضاء الفريق",
                "id": "المعرف (ID)",
                "generation": "الجيل",
                "registrationDate": "تاريخ التسجيل",
                "noResults": "لا توجد نتائج",
                "noMoreResults": "لا يوجد المزيد من النتائج"
            },
            "invite": {
                "title": "دعوة صديق",
                "headline": "شاهد الأفلام لتبدأ في كسب الدخل",
                "invitationLink": "رابط الدعوة",
                "invitationCode": "رمز الدعوة"
            },
            "revenueMusic": {
                "title": "مركز أعضاء الموسيقى"
            },
            "revenue": {
                "title": "مركز الأعضاء",
                "score": {
                    "title": "مركز التقييم",
                    "type": "النوع",
                    "director": "المخرج",
                    "introduction": "مقدمة",
                    "recommendations": "توصيات ذات صلة",
                    "categories": {
                        "upcoming_movies": "فيلم قادم",
                        "popular_movies": "فيلم رائج"
                    },
                    "watch": "مشاهدة"
                },
                "specialPackage": "باقات خاصة",
                "currentlevel": "المستوى الحالي",
                "todayEarning": "أرباح اليوم",
                "cumulativeEarning": "الأرباح التراكمية",
                "package": {
                    "view": "مشاهدة",
                    "dailyPerView": "المشاهدات اليومية",
                    "validTime": "مدة الصلاحية",
                    "perViewIncome": "الدخل لكل مشاهدة",
                    "scoreBtn": "قيّم لتحصل على الدخل",
                    "openSoon": "يفتح قريباً",
                    "stayTuned": "ترقبوا",
                    "unlockNow": "فتح الآن",
                    "expired": "انتهت صلاحية الباقة",
                    "expiresIn": "تنتهي في",
                    "totalReturn": "إجمالي العائد",
                    "dailyReturn": "العائد اليومي"
                },
                "packageDetails": "التفاصيل",
                "packageExplain": "تفاصيل الباقات",
                "buy": {
                    "modal": {
                        "text": "يرجى تأكيد رغبتك في إتمام عملية الشراء هذه"
                    }
                }
            },
            "record": {
                "title": "سجل",
                "viewRating": "عرض التقييم",
                "viewEarnings": "عرض الأرباح",
                "noMoreRecords": "لا توجد سجلات أخرى"
            },
            "profile": {
                "ofcWeb": "الموقع الرسمي",
                "partner": "آلية قائد أفلام إيتيرنوفا",
                "officalWebsite": "رابط الموقع الرسمي",
                "instagramAccount": "حساب إنستغرام",
                "userKYC": "توثيق هوية المستخدم",
                "telegram": "تيلجرام",
                "scoreRecord": "سجل النقاط",
                "loginPasswordTab": "كلمة مرور تسجيل الدخول",
                "transactionPasswordTab": "كلمة مرور المعاملات",
                "notification": "الإشعارات",
                "switchLanguage": "تغيير اللغة",
                "contactCustomerService": "تواصل مع خدمة العملاء",
                "appDownload": "تحميل التطبيق",
                "logOut": "تسجيل الخروج",
                "rechargeAndWithdraw": "شحن وسحب",
                "unreleasedPoint": "نقاط غير محررة",
                "memberPoint": "نقاط العضوية",
                "details": {
                    "title": "المعلومات الشخصية",
                    "nickname": "الاسم المستعار",
                    "enterNickname": "أدخل اسمك المستعار",
                    "gender": "الجنس",
                    "male": "ذكر",
                    "female": "أنثى",
                    "validation": {
                        "nickname": {
                            "required": "الاسم المستعار مطلوب"
                        },
                        "telegram": {
                            "invalid": "اسم مستخدم تيلجرام غير صالح"
                        },
                        "whatsapp": {
                            "invalid": "رقم واتساب غير صالح"
                        }
                    },
                    "updatedSuccess": "تم تحديث الملف الشخصي بنجاح"
                },
                "kyc": {
                    "title": "تم التحقق",
                    "errorPassport1": "الرجاء رفع صورة الوجه الأمامي لجواز السفر",
                    "errorPassport2": "الرجاء رفع صورة شخصية لك وأنت تحمل جواز سفرك",
                    "errorID1": "الرجاء رفع صورة الوجه الأمامي لبطاقة الهوية",
                    "errorID2": "الرجاء رفع صورة الوجه الخلفي لبطاقة الهوية",
                    "errorID3": "الرجاء رفع صورة شخصية لك وأنت تحمل بطاقة هويتك",
                    "successMsg": "تم تقديم توثيق الهوية بنجاح للمراجعة",
                    "errorMsg": "فشل تقديم توثيق الهوية، يرجى المحاولة مرة أخرى",
                    "inputs": {
                        "nationality": {
                            "label": "الجنسية",
                            "placeholder": "الرجاء إدخال الجنسية",
                            "validation": {
                                "required": "الجنسية مطلوبة"
                            }
                        },
                        "name": {
                            "label": "الاسم",
                            "placeholder": "الرجاء إدخال اسمك",
                            "validation": {
                                "required": "الاسم مطلوب"
                            }
                        },
                        "documentNumber": {
                            "label": "رقم الوثيقة",
                            "placeholder": "الرجاء إدخال رقم الهوية",
                            "validation": {
                                "required": "رقم الوثيقة مطلوب"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "نوع الوثيقة مطلوب"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "أنواع الوثائق",
                            "option1": "بطاقة هوية",
                            "option2": "جواز سفر",
                            "idCard": "بطاقة هوية",
                            "passport": "جواز سفر"
                        }
                    },
                    "uploadDocument": "رفع الوثيقة",
                    "frontOfDocument": "الوجه الأمامي للوثيقة",
                    "backOfDocument": "الوجه الخلفي للوثيقة",
                    "selfieHoldingDocument": "صورة شخصية وأنت تحمل الوثيقة",
                    "actionButton": "إرسال للمراجعة",
                    "kycVerified": "تمت مراجعة معلوماتك والتحقق منها. تم حذف بياناتك الشخصية على الفور. الملف الشخصي نشط مرة أخرى. شكراً لتعاونك.",
                    "alreadySubmited": "لقد قمت بالإرسال بالفعل. يرجى الانتظار حتى تكتمل عملية المراجعة",
                    "underReview": "طلب التحقق الخاص بك قيد المراجعة",
                    "verified": "تم التحقق من توثيق الهوية الخاص بك. تم قبول مستنداتك.",
                    "rejected": "فشل التحقق من توثيق الهوية. يرجى إعادة إرسال مستنداتك."
                },
                "loginPassword": {
                    "title": "كلمة مرور تسجيل الدخول",
                    "codeSent": "تم إرسال رمز التحقق بنجاح",
                    "changedSuccess": "تم تغيير كلمة المرور بنجاح",
                    "inputs": {
                        "email": {
                            "label": "البريد الإلكتروني",
                            "placeholder": "البريد الإلكتروني"
                        },
                        "verifyCode": {
                            "label": "رمز التحقق",
                            "placeholder": "الرجاء إدخال رمز التحقق",
                            "sendBtn": "إرسال",
                            "validation": {
                                "required": "رمز التحقق مطلوب"
                            }
                        },
                        "newPassword": {
                            "label": "كلمة مرور جديدة",
                            "placeholder": "من 6-20 حرفًا أبجديًا رقميًا",
                            "validation": {
                                "required": "كلمة المرور الجديدة مطلوبة",
                                "min": "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
                                "max": "يجب ألا تزيد كلمة المرور عن 20 حرفًا"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "أدخل كلمة المرور مرة أخرى للتأكيد",
                            "validation": {
                                "required": "الرجاء تأكيد كلمة المرور",
                                "oneOf": "يجب أن تتطابق كلمات المرور"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "كلمة مرور التمويل",
                    "codeSent": "تم إرسال رمز التحقق بنجاح",
                    "changedSuccess": "تم تغيير كلمة مرور التمويل بنجاح",
                    "changedSuccessBind": "تم ربط كلمة مرور التمويل بنجاح",
                    "inputs": {
                        "email": {
                            "label": "البريد الإلكتروني",
                            "placeholder": "البريد الإلكتروني"
                        },
                        "verifyCode": {
                            "label": "رمز التحقق",
                            "placeholder": "الرجاء إدخال رمز التحقق",
                            "sendBtn": "إرسال",
                            "validation": {
                                "required": "رمز التحقق مطلوب"
                            }
                        },
                        "newPassword": {
                            "label": "كلمة مرور التمويل",
                            "placeholder": "مجموعة من 6 أرقام",
                            "validation": {
                                "required": "كلمة مرور التمويل الجديدة مطلوبة",
                                "matches": "يجب أن تكون كلمة مرور التمويل مكونة من 6 أرقام بالضبط"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "أدخل كلمة المرور مرة أخرى للتأكيد",
                            "validation": {
                                "required": "الرجاء تأكيد كلمة المرور",
                                "oneOf": "يجب أن تتطابق كلمات المرور"
                            }
                        }
                    },
                    "reminder": {
                        "title": "تذكير هام",
                        "points": {
                            "point1": "تُستخدم كلمة مرور التمويل الخاصة بك للمعاملات والسحوبات وإعدادات أمان الحساب. يوصى بعدم مطابقتها لكلمة مرور تسجيل الدخول. الموقع غير مسؤول في حال تعرض الحساب للسرقة.",
                            "point2": "بعد تغيير كلمة مرور التمويل، لا يمكنك سحب الأموال خلال 48 ساعة"
                        }
                    }
                }
            },
            "wallet": {
                "title": "شحن وسحب",
                "totalAssets": "إجمالي الأصول",
                "recharge": "شحن",
                "withdraw": "سحب",
                "transfer": "تحويل",
                "assetDetails": "تفاصيل الأصول",
                "cancelWithdrawal": "إلغاء السحب",
                "addresses": "العنوان",
                "filters": {
                    "all": "الكل",
                    "recharge": "شحن",
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
                    "userCancel": "تم الإلغاء من قبل المستخدم",
                    "scheduled": "مجدول",
                    "shouldArriveBy": "يجب أن يصل بحلول",
                    "requiresAction": "يتطلب انتباهًا",
                    "requiresActionContact": "يرجى إكمال توثيق الهوية للمتابعة في عملية السحب."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "هل أنت متأكد أنك تريد إلغاء السحب؟"
                    }
                }
            },
            "withdraw": {
                "title": "سحب الأصول",
                "currentlyAvailableAssets": "الأصول المتاحة حالياً",
                "selectCurrency": "اختر العملة",
                "mainnet": "الشبكة الرئيسية",
                "withdrawalAddress": "عنوان السحب",
                "withdrawalAddressPL": "يرجى إدخال عنوان السحب",
                "withdrawalAmount": "مبلغ السحب",
                "withdrawalAmountAllowed": "المبلغ المسموح بين",
                "withdrawalAmountEnter": "أدخل المبلغ",
                "all": "الكل",
                "fees": "الرسوم",
                "incomeTax": "ضريبة الدخل",
                "actualArrival": "الوصول الفعلي",
                "confirmWithdrawal": "تأكيد السحب",
                "withdrawalInstructions": "تعليمات السحب",
                "withdrawalInstruction1": "وقت الوصول: سيتم إكمال طلب السحب خلال 1-72 ساعة.",
                "withdrawalInstruction2": "فاصل السحب: يتطلب مرور 24 ساعة بعد كل وصول ناجح لبدء عملية سحب جديدة.",
                "withdrawalInstruction3": "يتم خصم رسوم معالجة قدرها 1 USDT لكل عملية سحب.",
                "withdrawalInstruction4": "معيار الضريبة",
                "withdrawalInstruction5": "1000 USDT وما فوق: معفي من الضريبة",
                "withdrawalInstruction6": "لا يمكن بدء طلبات السحب اللاحقة قبل استلام السحب الأول.",
                "withdrawalInstruction7": "الحد الأدنى لمبلغ السحب: 15 USDT.",
                "validation": {
                    "address": {
                        "required": "عنوان السحب مطلوب"
                    },
                    "amount": {
                        "required": "يرجى إدخال مبلغ السحب",
                        "invalid": "يرجى إدخال مبلغ السحب",
                        "min": "الحد الأدنى لمبلغ السحب هو 15 USDT",
                        "max": "الحد الأقصى لمبلغ السحب هو 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "تحويل",
                "transferSuccessfully": "تم التحويل بنجاح",
                "transferCurrency": "عملة التحويل",
                "rechargeAndWithdraw": "شحن وسحب",
                "balance": "الرصيد",
                "memberPoint": "نقاط العضو",
                "transferAmount": "مبلغ التحويل",
                "all": "الكل",
                "confirmTransfer": "تأكيد التحويل",
                "enterAmount": "الرجاء إدخال مبلغ التحويل",
                "validation": {
                    "amount": {
                        "required": "الرجاء إدخال مبلغ التحويل",
                        "invalid": "المبلغ مطلوب",
                        "min": "الحد الأدنى لمبلغ التحويل هو 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "إيداع الأصول",
                "selectCurrency": "اختر العملة",
                "selectNetwork": "اختر الشبكة",
                "mainnet": "الشبكة الرئيسية",
                "saveQRcode": "حفظ رمز QR",
                "depositAddress": "عنوان الإيداع",
                "note": "ملاحظة",
                "depositInstructions": "تعليمات الإيداع",
                "instructions": [
                    "قبل المتابعة، يرجى التأكد من دقة نوع العملة المشفرة والشبكة الرئيسية ومعلومات العنوان.",
                    "الحد الأدنى لمبلغ الإيداع هو 8 USDT؛ لن يتم إضافة الإيداعات التي تقل عن هذا المبلغ إلى الحساب.",
                    "لا تقم بإيداع أصول أخرى غير USDT أو USDC إلى هذا العنوان، حيث لا يمكن استرداد الأموال.",
                    "احصل دائمًا على أحدث عنوان إيداع قبل كل معاملة لضمان أمان الأموال، حيث يتم تحديث العناوين بشكل دوري."
                ]
            },
            "unreleased": {
                "title": "نقاط لم يتم إصدارها",
                "desc": "وصف الأموال التي سيتم إصدارها",
                "burn": "حرق",
                "burnCause": "مكافآت الدعوة الأقل من حصة الصديق ستؤدي إلى الحرق",
                "friendshipLevel": "مستوى الصداقة",
                "release": "إصدار",
                "releaseCondition": "يساوي أو أعلى من المبلغ الذي يمكن إصداره من قبل الأصدقاء",
                "info1": "الأموال التي سيتم إصدارها ناتجة عن كون المستوى الحالي أقل من مستوى الأصدقاء في الفريق، وقد تم حرق مكافأة الدعوة.",
                "info2": "عندما يقوم المستخدم بالترقية ليصبح مستواه مساويًا أو أعلى من مستوى صديق الفريق، يمكنه الحصول على هذا الجزء من المبلغ الذي سيتم إصداره.",
                "toBeReleased": "الحصة التي سيتم إصدارها"
            },
            "memberPoint": {
                "title": "نقاط العضو",
                "totalAssets": "إجمالي الأصول",
                "assetDeposit": "إيداع الأصول",
                "assetDetails": "تفاصيل الأصول"
            },
            "appDownload": {
                "title": "تحميل التطبيق",
                "subtitle": "قم بتنزيل التطبيق لتجربة أفضل",
                "googlePlay": {
                    "label": "تنزيل من متجر Google Play"
                },
                "appStore": {
                    "label": "تنزيل من متجر Apple"
                },
                "note": "ملاحظة: أثناء عملية التنزيل والتثبيت، إذا حدث فشل في التنزيل، أو فشل في تحليل حزمة التثبيت، أو استثناء في التثبيت، يرجى التنزيل والتثبيت مرة أخرى"
            },
            "login": {
                "accountLogin": "تسجيل دخول الحساب",
                "noAccountYet": "ليس لديك حساب بعد؟",
                "registerNow": "سجل الآن",
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
                            "invalid": "صيغة البريد الإلكتروني غير صالحة"
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
                        "text": "ليس لديك حساب؟",
                        "link": "سجل الآن"
                    }
                },
                "buttons": {
                    "login": "تسجيل الدخول"
                },
                "success": "ناجح",
                "terms": {
                    "validation": {
                        "required": "يجب عليك قبول الشروط والأحكام"
                    }
                },
                "errors": {
                    "userNotFound": "المستخدم غير موجود",
                    "wrongPassword": "كلمة المرور غير صحيحة"
                }
            },
            "register": {
                "title": "تسجيل",
                "accountRegistration": "تسجيل حساب",
                "alreadyHaveAccount": "هل لديك حساب بالفعل؟",
                "loginNow": "سجل الدخول الآن",
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
                            "invalid": "صيغة البريد الإلكتروني غير صالحة"
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
                            "required": "الرجاء تأكيد كلمة المرور الخاصة بك",
                            "match": "يجب أن تتطابق كلمتا المرور"
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
                    "emailTaken": "البريد الإلكتروني مستخدم بالفعل",
                    "usernameTaken": "اسم المستخدم مستخدم بالفعل",
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
                        "link": "سجل الدخول الآن"
                    }
                },
                "success": "تم التسجيل بنجاح",
                "countrySelector": {
                    "title": "اختر الدولة"
                }
            },
            "terms": {
                "part1": "من خلال الاستمرار بحساب موجود في المملكة المتحدة، فإنك توافق على",
                "part2": "شروط الخدمة",
                "part3": "وتقر بأنك قد قرأت",
                "part4": "سياسة الخصوصية الخاصة بنا.",
                "title": "سياسة خصوصية Eternova Films"
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
                            "invalid": "صيغة البريد الإلكتروني غير صالحة"
                        }
                    },
                    "verificationCode": {
                        "label": "رمز التحقق",
                        "placeholder": "الرجاء إدخال رمز التحقق",
                        "validation": {
                            "required": "رمز التحقق مطلوب"
                        },
                        "button": "الحصول على رمز التحقق"
                    },
                    "newPassword": {
                        "label": "كلمة المرور الجديدة",
                        "placeholder": "الرجاء إدخال كلمة مرور جديدة",
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
                    "emailRequired": "الرجاء إدخال بريد إلكتروني صالح",
                    "codeSent": "تم إرسال رمز التحقق إلى بريدك الإلكتروني",
                    "sendError": "فشل إرسال الرمز",
                    "restSuccess": "تمت إعادة تعيين كلمة المرور بنجاح. الرجاء تسجيل الدخول.",
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
                    "noFundsPassword": "الرجاء ربط كلمة مرور المعاملات",
                    "checkError": "حدث خطأ أثناء التحقق من كلمة مرور الأموال",
                    "purchaseSuccess": "تم شراء الباقة بنجاح",
                    "withdrawalSuccess": "تم طلب السحب بنجاح",
                    "insufficientBalance": "رصيد غير كافٍ",
                    "transferToTask": "الرجاء تحويل رصيدك من السحب إلى نقاط الأعضاء",
                    "invalidPurchase": "بدء شراء غير صالح",
                    "incorrectPassword": "كلمة مرور الأموال غير صحيحة",
                    "purchaseError": "حدث خطأ أثناء الشراء",
                    "wait48Hours": "الرجاء الانتظار 48 ساعة بعد تغيير كلمة مرور الأموال للسحب",
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
                            "required": "الرجاء تأكيد كلمة مرور الأموال الخاصة بك",
                            "matches": "يجب أن تتطابق كلمتا المرور"
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
                "title": "تبديل اللغة"
            },
            "reels": {
                "missionAreaLabel": "منطقة المهام",
                "errors": {
                    "selectValidPackage": "الرجاء تحديد مهمة VIP",
                    "dailyLimitReached": "تم الوصول إلى الحد الأقصى",
                    "notPurchased": "لم يتم العثور على باقة",
                    "packageExpired": "الباقة منتهية الصلاحية",
                    "alreadyLiked": "تمت المشاهدة بالفعل"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "منطقة مهام VIP"
                    }
                }
            },
            "agentPromotion": {
                "title": "نظام ترويج الوكالة",
                "teamSize": "حجم الفريق",
                "nextStageTeamSize": "حجم الفريق للمرحلة التالية",
                "nextStageGroupPromotionReward": "مكافأة ترقية المجموعة للمرحلة التالية",
                "taskList": "قائمة المهام",
                "firstGenInvite": "دعوة عضو من المستوى الأول",
                "secondGenInvite": "دعوة عضو من المستوى الثاني",
                "thirdGenInvite": "دعوة عضو من المستوى الثالث",
                "lastWeekIncrease": "زيادة الأسبوع الماضي",
                "thisWeekIncrease": "زيادة هذا الأسبوع",
                "available": "متاح",
                "receiveBtn": "استلام",
                "levels": {
                    "beginnerCreator": "مبدع مبتدئ",
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
                            "label": "قناة الشحن"
                        },
                        "mainnet": {
                            "label": "الشبكة الرئيسية"
                        },
                        "address": {
                            "label": "العنوان",
                            "placeholder": "الرجاء إدخال العنوان",
                            "validation": {
                                "required": "لا يمكن أن يكون العنوان فارغًا"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "العنوان غير صالح، يرجى إدخال عنوان {{currency}}-{{network}} الصحيح",
                        "singleAddressLimit": "يُسمح بربط عنوان واحد فقط، إذا كنت بحاجة إلى التغيير، يرجى الاتصال بخدمة العملاء",
                        "addressAlreadyExists": "العنوان موجود بالفعل، يرجى عدم إضافته مرة أخرى"
                    },
                    "successBound": "تم ربط العنوان بنجاح"
                },
                "pleaseSelectAddress": "الرجاء تحديد عنوان",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "هذا العنوان مستخدم بالفعل. إذا كنت بحاجة إلى تغييره، يرجى الاتصال بخدمة العملاء."
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
                "cantDislike": "غير مسموح بوضع علامة عدم الإعجاب",
                "subscribe": "اشتراك",
                "subscribed": "مشترك",
                "subscribing": "جارٍ الاشتراك",
                "views": "مشاهدات",
                "explore": "استكشاف"
            },
            "shortsRevenue": {
                "title": "مقاطع الفيديو القصيرة"
            },
            "telegram": {
                "title": "تليجرام الرسمي",
                "joinGroup": "انضم إلى مجموعة تليجرام",
                "claimReward": "طالب بـ 4 USDT",
                "inputs": {
                    "username": {
                        "label": "اسم مستخدم تليجرام",
                        "placeholder": "الرجاء إدخال اسم مستخدم تليجرام الخاص بك",
                        "validation": {
                            "required": "اسم مستخدم تليجرام مطلوب"
                        }
                    }
                },
                "rewardInstructions": "تعليمات مكافأة الانضمام إلى المجموعة",
                "rewardInstruction1": "للتقدم بطلب للحصول على مكافأة الانضمام إلى المجموعة، يرجى استخدام اسم مستخدم تليجرام الخاص بك.",
                "rewardInstruction2": "الحسابات الجديدة فقط هي المؤهلة لتلقي المكافأة. الحسابات التي تلقتها بالفعل غير مؤهلة للحصول على مكافأة الانضمام إلى المجموعة.",
                "rewardStatuses": {
                    "pendingReview": "لقد تقدمت بطلب بالفعل. يرجى انتظار المشرف لإرسال المكافأة.",
                    "alreadyClaimed": "تمت المطالبة بالمكافأة بالفعل.",
                    "pendingReviewGr": "مكافأة الانضمام إلى المجموعة قيد المراجعة. تأكد من أنك قد انضممت إلى المجموعة بينما يقوم المشرف بمراجعة طلبك.",
                    "notInGroup": "اسم مستخدم تليجرام الذي أدخلته ليس في المجموعة. يرجى التقديم مرة أخرى. تأكد من أنك قد انضممت إلى المجموعة وأن اسم مستخدم تليجرام الخاص بك صحيح.",
                    "userNameUsed": "اسم مستخدم تليجرام مستخدم بالفعل. اتصل بخدمة العملاء إذا كنت تعتقد أن هذا غير صحيح."
                }
            },
            "missionsCenter": {
                "title": "قائمة المهام",
                "direct": "مهمة مباشرة",
                "team": "مهمة الفريق",
                "growth": "مهمة النمو",
                "progress": "التقدم",
                "added": "العدد الذي سيتم جمعه: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "تمت المطالبة",
                "isClaiming": "جارٍ المطالبة",
                "inProgress": "قيد التقدم",
                "claimReward": "مطالبة",
                "addDirectActiveMembers": "قم بدعوة {{count}} عضوًا بنجاح من جيلك الأول للاشتراك في أي باقة VIP، وستحصل على {{reward}} USDT",
                "addTeamMembers": "احصل على {{reward}} USDT عندما تصل اشتراكات جيلك الثاني والثالث في VIP1 أو أعلى إلى إجمالي {{count}} عضوًا",
                "addGrowthMembers": "أضف {{count}} إجمالي الأعضاء النشطين",
                "rewardClaimed": "تمت المطالبة بالمكافأة بنجاح",
                "claimFailed": "فشل في المطالبة بالمكافأة"
            }
        }
    },
    hi: {
        translation: {
            "global": {
                "copySuccess": "कॉपी हो गया",
                "days": "दिन",
                "insufficientBalance": "अपरिप्याप्त शेष राशि",
                "wait48hrs": "फंड पासवर्ड बदलने के बाद कृपया 48 घंटे प्रतीक्षा करें",
                "pleaseEnter": "कृपया दर्ज करें",
                "save": "सेव करें",
                "ok": "ठीक है",
                "error": {
                    "invalidCode": "अमान्य सत्यापन कोड",
                    "tryAgain": "कुछ गलत हो गया, बाद में पुनः प्रयास करें"
                },
                "saved": "सेव हो गया",
                "day": "दिन",
                "change": "बदलें",
                "from": "से",
                "to": "तक",
                "analyze": "विश्लेषण करें",
                "total": "कुल",
                "loading": "लोड हो रहा है",
                "free": "मुफ़्त",
                "ongoingWithdrawal": "एक समय में केवल एक ही निकासी की जा सकती है",
                "waitAfterSuccessWithdraw": "अगली निकासी के अनुरोध पिछली निकासी के पूरा होने के 24 घंटे बाद ही किए जा सकते हैं",
                "waitAfterCanceledWithdraw": "निकासी रद्द करने के बाद कृपया एक और अनुरोध करने से पहले 24 घंटे प्रतीक्षा करें",
                "todaysEarnings": "आज की कमाई",
                "cumulativeEarnings": "कुल कमाई",
                "myLevel": "मेरा स्तर",
                "upgrade": "अपग्रेड करें",
                "success": "सफलता",
                "stayTuned": "बने रहें",
                "months": {
                    "jan": "जनवरी",
                    "feb": "फ़रवरी",
                    "mar": "मार्च",
                    "apr": "अप्रैल",
                    "may": "मई",
                    "jun": "जून",
                    "jul": "जुलाई",
                    "aug": "अगस्त",
                    "sep": "सितंबर",
                    "oct": "अक्टूबर",
                    "nov": "नवंबर",
                    "dec": "दिसंबर"
                },
                "people": "लोग",
                "views": "व्यूज़",
                "dontRepeat": "कृपया अनुरोध को दोहराएं नहीं",
                "sending": "भेजा जा रहा है",

                "cancel": "रद्द करें",
                "confirm": "पुष्टि करें",
                "selectCategory": "श्रेणी चुनें"

            },
            "common": {
                "errorOccurred": "एक त्रुटि हुई"
            },
            "bottomBar": {
                "home": "होम",
                "team": "टीम",
                "revenue": "राजस्व",
                "record": "संगीत",
                "mine": "मेरा"
            },
            "home": {
                "viral": "शॉर्ट्स",
                "tredningNow": "लोकप्रिय फिल्में",
                "seeMore": "और देखें",
                "aboutUs": "हमारे बारे में",
                "help": "सहायता",
                "missionCenter": "मिशन केंद्र",
                "bonusDescription": "बोनस विवरण",
                "socialMedia": "सोशल मीडिया",
                "joinUs": "आधिकारिक एटरनोवा फिल्म्स टेलीग्राम समूह में शामिल हों और 1 USDT के इनाम का दावा करें।",
                "leader": "एटरनोवा फिल्म्स सिटी पार्टनर",
                "home": "होम",
                "forYou": "आपके लिए",
                "inviteFriends": "दोस्तों को आमंत्रित करें",
                "inviteFriendsText": "आय कमाने के लिए दोस्तों को आमंत्रित करें",
                "annoucments": [
                    "एटरनोवा फिल्म्स में आपका स्वागत है! अपने छोटे वीडियो बनाएं, साझा करें और उनसे कमाई करें।"
                ]
            },
            "about": {
                "title": "कंपनी के बारे में"
            },
            "notices": {
                "title": "सूचनाएं",
                "translation": {
                    "eternovafilms_open": {
                        "title": "एटरनोवा फिल्म्स में आपका स्वागत है",
                        "content": "हमें खुशी है कि आप हमारे समुदाय में शामिल हो रहे हैं। एटरनोवा फिल्म्स सिर्फ एक मंच से कहीं ज़्यादा है - यह एक ऐसा मंच है जहाँ सिनेमा, संगीत और रचनात्मकता एक साथ चमकते हैं। यहाँ आप शक्तिशाली कहानियाँ, अविस्मरणीय प्रदर्शन, और दुनिया भर के सपने देखने वालों और रचनाकारों के साथ बढ़ने के अवसर पाएंगे। चाहे आप यहाँ फिल्मों का आनंद लेने, संगीत की खोज करने, या नए उपक्रमों में भाग लेने के लिए हों, आपकी यात्रा अब शुरू होती है। हमारे साथ इस दुनिया में कदम रखने के लिए धन्यवाद - हम मिलकर कुछ कालातीत बना रहे हैं। आधिकारिक टेलीग्राम समूह में शामिल हों और आज ही अपने 1 USDT इनाम का दावा करें!"
                    }
                }
            },
            "help": {
                "title": "सहायता केंद्र",
                "translation": {
                    "how_to_recharge": {
                        "title": "रीचार्ज कैसे करें",
                        "content": "नीचे बार पर 'मेरा' खोलें। 'रीचार्ज और निकासी' → 'रीचार्ज' पर जाएँ। अपनी मुद्रा और मेननेट चुनें, फिर जमा पता कॉपी करें।"
                    },
                    "how_to_do_task_movie": {
                        "title": "फिल्म का कार्य कैसे करें",
                        "content": "'राजस्व' खोलें। अपना पैकेज ढूंढें, आय जमा करने के लिए 'स्कोर' पर टैप करें, एक वीडियो चुनें, फिर उसे लाइक करें।"
                    },
                    "how_to_do_task_music": {
                        "title": "संगीत का कार्य कैसे करें",
                        "content": "'संगीत' खोलें। अपना पैकेज ढूंढें, आय जमा करने के लिए 'स्कोर' पर टैप करें, एक वीडियो चुनें, फिर उसे लाइक करें।"
                    },
                    "how_to_withdraw": {
                        "title": "निकासी कैसे करें",
                        "content": "'मेरा' → 'रीचार्ज और निकासी' → 'निकासी' खोलें। मुद्रा और मेननेट चुनें, एक सेव किया हुआ पता चुनें, राशि दर्ज करें, 'निकासी की पुष्टि करें' पर टैप करें, फिर अपने फंड पासवर्ड से सत्यापन करें।"
                    },
                    "how_to_invite_friends": {
                        "title": "दोस्तों को कैसे आमंत्रित करें",
                        "content": "'टीम' → 'दोस्त को आमंत्रित करें' पर जाएँ। अपने निमंत्रण कोड को कॉपी करने के लिए 'कॉपी' पर टैप करें।"
                    },
                    "how_to_register": {
                        "title": "पंजीकरण कैसे करें",
                        "content": "पंजीकरण पृष्ठ पर: उपयोगकर्ता नाम और ईमेल दर्ज करें, अपने फोन का देश कोड चुनें, अपना फोन नंबर दर्ज करें, एक पासवर्ड बनाएं और उसकी पुष्टि करें, निमंत्रण कोड जोड़ें, फिर 'रजिस्टर' तीर पर टैप करें।"
                    },
                    "how_to_purchase_package_long": {
                        "title": "एक पैकेज कैसे खरीदें (लॉन्ग वीडियो सेक्शन)",
                        "content": "'VIP' खोलें, एक पैकेज चुनें, फिर 'अभी अनलॉक करें' पर टैप करें।"
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "एक पैकेज कैसे खरीदें (शॉर्ट्स सेक्शन)",
                        "content": "'शॉर्ट्स' खोलें, एक पैकेज चुनें, फिर 'अभी अनलॉक करें' पर टैप करें।"
                    },
                    "how_to_transfer_funds": {
                        "title": "रीचार्ज और निकासी से सदस्य पॉइंट्स में फंड कैसे ट्रांसफर करें",
                        "content": "'मेरा' → 'रीचार्ज और निकासी' खोलें। ट्रांसफर आइकन (ऊपर दाईं ओर) पर टैप करें, मुद्रा चुनें, राशि दर्ज करें, फिर 'ट्रांसफर की पुष्टि करें' पर टैप करें।"
                    },
                    "how_to_reset_password": {
                        "title": "पासवर्ड रीसेट कैसे करें",
                        "content": "लॉगिन स्क्रीन पर, 'पासवर्ड भूल गए' पर टैप करें। अपना ईमेल दर्ज करें, 'सत्यापन कोड प्राप्त करें' पर टैप करें, अपने ईमेल से कोड डालें, एक नया पासवर्ड सेट करें, फिर 'ठीक है' पर टैप करें।"
                    },
                    "how_to_change_password": {
                        "title": "पासवर्ड कैसे बदलें",
                        "content": "'मेरा' → 'लॉगिन पासवर्ड' खोलें। अपना ईमेल दर्ज करें, 'सत्यापन कोड प्राप्त करें' पर टैप करें, कोड डालें, अपना नया पासवर्ड सेट करें और उसकी पुष्टि करें, फिर 'ठीक है' पर टैप करें।"
                    },
                    "how_to_set_funding_password": {
                        "title": "फंडिंग पासवर्ड कैसे सेट करें",
                        "content": "'मेरा' → 'लेन-देन पासवर्ड' खोलें। अपना ईमेल दर्ज करें, 'सत्यापन कोड प्राप्त करें' पर टैप करें, कोड डालें, अपना फंडिंग पासवर्ड सेट करें और उसकी पुष्टि करें, फिर 'ठीक है' पर टैप करें।"
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "निकासी का पता कैसे बाइंड करें",
                        "content": "'मेरा' → 'रीचार्ज और निकासी' खोलें। पता सूची → 'पता जोड़ें' खोलें। चैनल और मेननेट चुनें, अपना निकासी पता दर्ज करें, ईमेल कोड के माध्यम से सत्यापन करें, फिर 'ठीक है' पर टैप करें।"
                    },
                    "how_to_protect_my_account": {
                        "title": "मेरे खाते को कैसे सुरक्षित रखें",
                        "content": "'मेरा' → 'उपयोगकर्ता KYC' खोलें। राष्ट्रीयता और वास्तविक नाम दर्ज करें, दस्तावेज़ का प्रकार चुनें, दस्तावेज़ संख्या भरें, दस्तावेज़ अपलोड करें, फिर 'समीक्षा के लिए सबमिट करें' पर टैप करें।"
                    }
                }
            },
            "helpDetails": {
                "title": "ट्यूटोरियल"
            },
            "introduction": {
                "title": "आय की व्याख्या"
            },
            "social": {
                "title": "एटेर्नोवा फिल्म्स सोशल मीडिया",
                "offical": "सोशल मीडिया",
                "officalTGChannel": "आधिकारिक टेलीग्राम चैनल",
                "officalTGGroup": "आधिकारिक टेलीग्राम ग्रुप",
                "subscribers": "सब्सक्राइबर",
                "join": "शामिल हों",
                "officalIG": "आधिकारिक इंस्टाग्राम प्रोफाइल",
                "follow": "फॉलो करें",
                "followers": "फॉलोअर्स",
                "community": "समुदाय",
                "members": "सदस्य",
                "new": "नया",
                "errorRegion": "इस ग्रुप तक पहुंचने के लिए कृपया एक पैकेज खरीदें।"
            },
            "notification": {
                "title": "सूचना",
                "types": {
                    "eventNotification": "इवेंट सूचना",
                    "walletMessage": "वॉलेट संदेश",
                    "systemNotification": "सिस्टम सूचना"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "निकासी के लिए आवेदन",
                        "message": "आपने USDT की निकासी के लिए आवेदन किया है, कृपया अनुमोदन की प्रतीक्षा करें, ऑर्डर नंबर: {{order_number}}, राशि: {{amount}}, हैंडलिंग शुल्क: {{fee}}USDT"
                    },
                    "withdrawal_approve": {
                        "title": "निकासी पूरी हुई",
                        "message": "आपकी निकासी पूरी हो गई है, ऑर्डर नंबर: {{order_number}}, राशि: {{amount}}, हैंडलिंग शुल्क: {{fee}}USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC सबमिट किया गया",
                        "message": "आपका KYC समीक्षा के लिए सबमिट कर दिया गया है"
                    },
                    "kyc_approved": {
                        "title": "KYC स्वीकृत",
                        "message": "आपका KYC स्वीकृत कर दिया गया है"
                    },
                    "kyc_rejected": {
                        "title": "KYC अस्वीकृत",
                        "message": "आपका KYC अस्वीकृत कर दिया गया है"
                    }
                }
            },
            "notificationDetails": {
                "title": "सूचना"
            },
            "team": {
                "title": "टीम",
                "benefitAnalysis": "लाभ विश्लेषण",
                "investmentIncome": "निवेश आय",
                "teamMemberListBtn": "टीम सदस्य सूची",
                "inviteFriend": "मित्र को आमंत्रित करें",
                "inviteFriendInfo": "आय अर्जित करना शुरू करने के लिए फिल्में देखें",
                "totalIncome": "कुल उपयोगकर्ता आय",
                "todayIncome": "आज की आय",
                "todayInc": "आज",
                "teamTotal": "टीम के लिए कुल सदस्यता राशि",
                "likesIncome": "लाइक्स से आय",
                "teamIncome": "टीम से आय",
                "totalReturn": "कुल रिटर्न",
                "totalTeamMembers": "कुल टीम सदस्य",
                "addedToday": "आज जोड़े गए",
                "firstGeneration": "पहली पीढ़ी",
                "totalMembers": "कुल सदस्य",
                "totalActiveMembers": "सक्रिय",
                "genTotalIncome": "कुल आय",
                "secondGeneration": "दूसरी पीढ़ी",
                "thirdGeneration": "तीसरी पीढ़ी",
                "fourthGeneration": "चौथी पीढ़ी",
                "fifthGeneration": "पांचवीं पीढ़ी",
                "totalNumberOfFriends": "मित्रों की कुल संख्या",
                "activeFriends": "सक्रिय मित्र"
            },
            "myTeam": {
                "title": "टीम सदस्य सूची",
                "id": "आईडी",
                "generation": "पीढ़ी",
                "registrationDate": "पंजीकरण तिथि",
                "noResults": "कोई परिणाम नहीं",
                "noMoreResults": "कोई और परिणाम नहीं"
            },
            "invite": {
                "title": "मित्र को आमंत्रित करें",
                "headline": "आय अर्जित करना शुरू करने के लिए फिल्में देखें",
                "invitationLink": "आमंत्रण लिंक",
                "invंत्रणCode": "आमंत्रण कोड"
            },
            "revenueMusic": {
                "title": "संगीत सदस्य केंद्र"
            },
            "revenue": {
                "title": "सदस्य केंद्र",
                "score": {
                    "title": "स्कोरिंग केंद्र",
                    "type": "प्रकार",
                    "director": "निर्देशक",
                    "introduction": "परिचय",
                    "recommendations": "संबंधित सिफारिशें",
                    "categories": {
                        "upcoming_movies": "आने वाली फिल्म",
                        "popular_movies": "लोकप्रिय फिल्म"
                    },
                    "watch": "देखें"
                },
                "specialPackage": "विशेष पैकेज",
                "currentlevel": "वर्तमान स्तर",
                "todayEarning": "आज की कमाई",
                "cumulativeEarning": "संचयी कमाई",
                "package": {
                    "view": "देखें",
                    "dailyPerView": "दैनिक दृश्य",
                    "validTime": "वैध समय",
                    "perViewIncome": "प्रति दृश्य आय",
                    "scoreBtn": "आय पाने के लिए स्कोर करें",
                    "openSoon": "जल्द ही खुलेगा",
                    "stayTuned": "बने रहें",
                    "unlockNow": "अभी अनलॉक करें",
                    "expired": "पैकेज की समय सीमा समाप्त हो गई",
                    "expiresIn": "की समय सीमा समाप्त",
                    "totalReturn": "कुल रिटर्न",
                    "dailyReturn": "दैनिक रिटर्न"
                },
                "packageDetails": "विवरण",
                "packageExplain": "पैकेज विवरण",
                "buy": {
                    "modal": {
                        "text": "कृपया पुष्टि करें कि आप इस खरीद को पूरा करना चाहते हैं"
                    }
                }
            },
            "record": {
                "title": "रिकॉर्ड",
                "viewRating": "दृश्य रेटिंग",
                "viewEarnings": "दृश्य कमाई",
                "noMoreRecords": "कोई और रिकॉर्ड नहीं"
            },
            "profile": {
                "ofcWeb": "आधिकारिक वेबसाइट",
                "partner": "एटरनोवा फिल्म्स लीडर तंत्र",
                "officalWebsite": "आधिकारिक वेबसाइट लिंक",
                "instagramAccount": "इंस्टाग्राम अकाउंट",
                "userKYC": "यूज़र केवाईसी",
                "telegram": "टेलीग्राम",
                "scoreRecord": "स्कोर रिकॉर्ड",
                "loginPasswordTab": "लॉगिन पासवर्ड",
                "transactionPasswordTab": "ट्रांज़ेक्शन पासवर्ड",
                "notification": "सूचना",
                "switchLanguage": "भाषा बदलें",
                "contactCustomerService": "ग्राहक सेवा से संपर्क करें",
                "appDownload": "ऐप डाउनलोड",
                "logOut": "लॉगआउट",
                "rechargeAndWithdraw": "रिचार्ज और निकालें",
                "unreleasedPoint": "अप्रकाशित पॉइंट",
                "memberPoint": "सदस्य पॉइंट",
                "details": {
                    "title": "व्यक्तिगत जानकारी",
                    "nickname": "उपनाम",
                    "enterNickname": "अपना उपनाम दर्ज करें",
                    "gender": "लिंग",
                    "male": "पुरुष",
                    "female": "महिला",
                    "validation": {
                        "nickname": {
                            "required": "उपनाम आवश्यक है"
                        },
                        "telegram": {
                            "invalid": "अवैध टेलीग्राम यूज़रनेम"
                        },
                        "whatsapp": {
                            "invalid": "अवैध व्हाट्सएप नंबर"
                        }
                    },
                    "updatedSuccess": "प्रोफ़ाइल सफलतापूर्वक अपडेट हुई"
                },
                "kyc": {
                    "title": "सत्यापित",
                    "errorPassport1": "कृपया पासपोर्ट के सामने की इमेज अपलोड करें",
                    "errorPassport2": "कृपया अपना पासपोर्ट पकड़े हुए एक सेल्फी अपलोड करें",
                    "errorID1": "कृपया अपने आईडी कार्ड के सामने की इमेज अपलोड करें",
                    "errorID2": "कृपया अपने आईडी कार्ड के पीछे की इमेज अपलोड करें",
                    "errorID3": "कृपया अपना आईडी कार्ड पकड़े हुए एक सेल्फी अपलोड करें",
                    "successMsg": "समीक्षा के लिए केवाईसी सफलतापूर्वक सबमिट हुआ",
                    "errorMsg": "केवाईसी सबमिट करने में विफल रहा, कृपया फिर से कोशिश करें",
                    "inputs": {
                        "nationality": {
                            "label": "राष्ट्रीयता",
                            "placeholder": "कृपया राष्ट्रीयता दर्ज करें",
                            "validation": {
                                "required": "राष्ट्रीयता आवश्यक है"
                            }
                        },
                        "name": {
                            "label": "नाम",
                            "placeholder": "कृपया अपना नाम दर्ज करें",
                            "validation": {
                                "required": "नाम आवश्यक है"
                            }
                        },
                        "documentNumber": {
                            "label": "दस्तावेज़ संख्या",
                            "placeholder": "कृपया आईडी नंबर दर्ज करें",
                            "validation": {
                                "required": "दस्तावेज़ संख्या आवश्यक है"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "दस्तावेज़ का प्रकार आवश्यक है"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "दस्तावेज़ के प्रकार",
                            "option1": "आईडी कार्ड",
                            "option2": "पासपोर्ट",
                            "idCard": "आईडी कार्ड",
                            "passport": "पासपोर्ट"
                        }
                    },
                    "uploadDocument": "दस्तावेज़ अपलोड",
                    "frontOfDocument": "दस्तावेज़ का सामने का हिस्सा",
                    "backOfDocument": "दस्तावेज़ का पीछे का हिस्सा",
                    "selfieHoldingDocument": "दस्तावेज़ पकड़े हुए सेल्फी",
                    "actionButton": "समीक्षा के लिए सबमिट करें",
                    "kycVerified": "आपकी जानकारी की समीक्षा और सत्यापन हो गया है। आपकी व्यक्तिगत जानकारी तुरंत हटा दी गई थी। प्रोफ़ाइल फिर से सक्रिय है। आपके सहयोग के लिए धन्यवाद।",
                    "alreadySubmited": "आपने पहले ही सबमिट कर दिया है। कृपया समीक्षा प्रक्रिया पूरी होने की प्रतीक्षा करें",
                    "underReview": "आपके सत्यापन अनुरोध की समीक्षा चल रही है",
                    "verified": "आपका केवाईसी सत्यापन पूरा हो गया है। आपके दस्तावेज़ स्वीकार कर लिए गए हैं।",
                    "rejected": "केवाईसी सत्यापन विफल रहा। कृपया अपने दस्तावेज़ फिर से सबमिट करें।"
                },
                "loginPassword": {
                    "title": "लॉगिन पासवर्ड",
                    "codeSent": "सत्यापन कोड सफलतापूर्वक भेजा गया",
                    "changedSuccess": "पासवर्ड सफलतापूर्वक बदल गया",
                    "inputs": {
                        "email": {
                            "label": "ईमेल एड्रेस",
                            "placeholder": "ईमेल"
                        },
                        "verifyCode": {
                            "label": "सत्यापन कोड",
                            "placeholder": "कृपया सत्यापन कोड दर्ज करें",
                            "sendBtn": "भेजें",
                            "validation": {
                                "required": "सत्यापन कोड आवश्यक है"
                            }
                        },
                        "newPassword": {
                            "label": "नया पासवर्ड",
                            "placeholder": "6-20 अल्फ़ान्यूमेरिक वर्ण",
                            "validation": {
                                "required": "नया पासवर्ड आवश्यक है",
                                "min": "पासवर्ड कम से कम 6 वर्णों का होना चाहिए",
                                "max": "पासवर्ड 20 वर्णों से अधिक लंबा नहीं हो सकता"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "पुष्टि के लिए पासवर्ड फिर से दर्ज करें",
                            "validation": {
                                "required": "कृपया अपने पासवर्ड की पुष्टि करें",
                                "oneOf": "पासवर्ड मेल खाने चाहिए"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "फंडिंग पासवर्ड",
                    "codeSent": "सत्यापन कोड सफलतापूर्वक भेजा गया",
                    "changedSuccess": "फंड्स पासवर्ड सफलतापूर्वक बदल गया",
                    "changedSuccessBind": "फंड्स पासवर्ड सफलतापूर्वक बाउंड हुआ",
                    "inputs": {
                        "email": {
                            "label": "ईमेल एड्रेस",
                            "placeholder": "ईमेल"
                        },
                        "verifyCode": {
                            "label": "सत्यापन कोड",
                            "placeholder": "कृपया सत्यापन कोड दर्ज करें",
                            "sendBtn": "भेजें",
                            "validation": {
                                "required": "सत्यापन कोड आवश्यक है"
                            }
                        },
                        "newPassword": {
                            "label": "फंडिंग पासवर्ड",
                            "placeholder": "6-अंकीय संयोजन",
                            "validation": {
                                "required": "नया फंड्स पासवर्ड आवश्यक है",
                                "matches": "फंड्स पासवर्ड ठीक 6 अंकों का होना चाहिए"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "पुष्टि के लिए पासवर्ड फिर से दर्ज करें",
                            "validation": {
                                "required": "कृपया अपने पासवर्ड की पुष्टि करें",
                                "oneOf": "पासवर्ड मेल खाने चाहिए"
                            }
                        }
                    },
                    "reminder": {
                        "title": "एक गर्मजोशी से भरा रिमाइंडर",
                        "points": {
                            "point1": "आपका फंड पासवर्ड ट्रांज़ैक्शन, निकासी और खाता सुरक्षा सेटिंग्स के लिए उपयोग किया जाता है। इसे लॉगिन पासवर्ड के साथ संगत नहीं होने की सलाह दी जाती है। यदि इससे खाता चोरी हो जाता है, तो यह साइट ज़िम्मेदार नहीं है।",
                            "point2": "फंड पासवर्ड बदलने के बाद, आप 48 घंटे के भीतर पैसा नहीं निकाल सकते"
                        }
                    }
                }
            },
            "wallet": {
                "title": "रीचार्ज और निकालें",
                "totalAssets": "कुल संपत्ति",
                "recharge": "रीचार्ज",
                "withdraw": "निकालें",
                "transfer": "स्थानांतरण",
                "assetDetails": "संपत्ति का विवरण",
                "cancelWithdrawal": "निकासी रद्द करें",
                "addresses": "पता",
                "filters": {
                    "all": "सभी",
                    "recharge": "रीचार्ज",
                    "transfer": "स्थानांतरण",
                    "withdraw": "निकालें",
                    "levelPurchase": "लेवल ख़रीद",
                    "taskReward": "टास्क रिवॉर्ड",
                    "teamCommission": "टीम कमीशन",
                    "bonus": "बोनस",
                    "salary": "वेतन"
                },
                "timeRange": {
                    "title": "समय सीमा चुनें"
                },
                "status": {
                    "completed": "पूरा हो गया",
                    "rejected": "अस्वीकृत",
                    "processing": "प्रसंस्करण हो रहा है",
                    "userCancel": "उपयोगकर्ता द्वारा रद्द किया गया",
                    "scheduled": "निर्धारित",
                    "shouldArriveBy": "इस समय तक आ जाना चाहिए",
                    "requiresAction": "ध्यान देने की आवश्यकता है",
                    "requiresActionContact": "निकासी के लिए, कृपया KYC सत्यापन पूरा करें।"
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "क्या आप सचमुच निकासी रद्द करना चाहते हैं?"
                    }
                }
            },
            "withdraw": {
                "title": "एसेट निकासी",
                "currentlyAvailableAssets": "वर्तमान में उपलब्ध एसेट",
                "selectCurrency": "मुद्रा चुनें",
                "mainnet": "मेननेट",
                "withdrawalAddress": "निकासी पता",
                "withdrawalAddressPL": "कृपया निकासी का पता दर्ज करें",
                "withdrawalAmount": "निकासी राशि",
                "withdrawalAmountAllowed": "स्वीकृत राशि के बीच",
                "withdrawalAmountEnter": "राशि दर्ज करें",
                "all": "सभी",
                "fees": "शुल्क",
                "incomeTax": "आय कर",
                "actualArrival": "वास्तविक प्राप्ति",
                "confirmWithdrawal": "निकासी की पुष्टि करें",
                "withdrawalInstructions": "निकासी निर्देश",
                "withdrawalInstruction1": "पहुंचने का समय: निकासी आवेदन 1-72 घंटे के भीतर पूरा हो जाएगा।",
                "withdrawalInstruction2": "निकासी अंतराल: प्रत्येक सफल प्राप्ति के बाद निकासी शुरू करने में 24 घंटे लगते हैं।",
                "withdrawalInstruction3": "प्रत्येक निकासी के लिए 1 USDT का हैंडलिंग शुल्क लिया जाता है।",
                "withdrawalInstruction4": "कर मानक",
                "withdrawalInstruction5": "1000 USDT और उससे अधिक: कर-मुक्त",
                "withdrawalInstruction6": "पहली निकासी प्राप्त होने से पहले बाद के निकासी आवेदन शुरू नहीं किए जा सकते हैं।",
                "withdrawalInstruction7": "न्यूनतम निकासी राशि: 15 USDT।",
                "validation": {
                    "address": {
                        "required": "निकासी का पता आवश्यक है"
                    },
                    "amount": {
                        "required": "कृपया निकासी राशि दर्ज करें",
                        "invalid": "कृपया निकासी राशि दर्ज करें",
                        "min": "न्यूनतम निकासी राशि 15 USDT है",
                        "max": "अधिकतम निकासी राशि 50000 USDT है"
                    }
                }
            },
            "transfer": {
                "title": "स्थानांतरण",
                "transferSuccessfully": "सफलतापूर्वक स्थानांतरित हुआ",
                "transferCurrency": "स्थानांतरण मुद्रा",
                "rechargeAndWithdraw": "रीचार्ज और निकासी",
                "balance": "शेष राशि",
                "memberPoint": "सदस्य बिंदु",
                "transferAmount": "स्थानांतरण राशि",
                "all": "सभी",
                "confirmTransfer": "स्थानांतरण की पुष्टि करें",
                "enterAmount": "कृपया स्थानांतरण राशि दर्ज करें",
                "validation": {
                    "amount": {
                        "required": "कृपया स्थानांतरण राशि दर्ज करें",
                        "invalid": "राशि आवश्यक है",
                        "min": "न्यूनतम स्थानांतरण राशि 1 USDT है"
                    }
                }
            },
            "recharge": {
                "title": "एसेट जमा",
                "selectCurrency": "मुद्रा चुनें",
                "selectNetwork": "नेटवर्क चुनें",
                "mainnet": "मेननेट",
                "saveQRcode": "QR कोड सेव करें",
                "depositAddress": "जमा पता",
                "note": "टिप्पणी",
                "depositInstructions": "जमा निर्देश",
                "instructions": [
                    "आगे बढ़ने से पहले, कृपया सुनिश्चित करें कि आपकी क्रिप्टोकरेंसी का प्रकार, मुख्य नेटवर्क और पते की जानकारी सही है।",
                    "न्यूनतम जमा राशि 8 USDT है; इससे कम की जमा राशि जमा नहीं की जाएगी।",
                    "इस पते पर USDT या USDC के अलावा अन्य एसेट जमा न करें, क्योंकि धन को पुनः प्राप्त नहीं किया जा सकता है।",
                    "धन की सुरक्षा सुनिश्चित करने के लिए प्रत्येक लेनदेन से पहले हमेशा नवीनतम जमा पता प्राप्त करें, क्योंकि पते समय-समय पर अपडेट किए जाते हैं।"
                ]
            },
            "unreleased": {
                "title": "अप्रकाशित बिंदु",
                "desc": "जारी होने वाले धन का विवरण",
                "burn": "बर्न",
                "burnCause": "मित्र के हिस्से से कम आमंत्रण पुरस्कार बर्न का कारण बनेंगे",
                "friendshipLevel": "मित्रता स्तर",
                "release": "जारी करें",
                "releaseCondition": "मित्रों द्वारा जारी की जा सकने वाली राशि के बराबर या उससे अधिक",
                "info1": "जारी होने वाला फंड वर्तमान स्तर के टीम के मित्रों के स्तर से कम होने के कारण है, और आमंत्रण पुरस्कार जल गया है।",
                "info2": "जब उपयोगकर्ता टीम के मित्र के स्तर के बराबर या उससे अधिक अपग्रेड करता है, तो वह जारी होने वाली इस राशि का हिस्सा प्राप्त कर सकता है।",
                "toBeReleased": "जारी होने वाला कोटा"
            },
            "memberPoint": {
                "title": "सदस्य बिंदु",
                "totalAssets": "कुल एसेट",
                "assetDeposit": "एसेट जमा",
                "assetDetails": "एसेट विवरण"
            },
            "appDownload": {
                "title": "ऐप डाउनलोड",
                "subtitle": "बेहतर अनुभव के लिए ऐप डाउनलोड करें",
                "googlePlay": {
                    "label": "गूगल प्ले स्टोर डाउनलोड"
                },
                "appStore": {
                    "label": "एप्पल स्टोर डाउनलोड"
                },
                "note": "टिप्पणी: डाउनलोड और इंस्टॉलेशन प्रक्रिया के दौरान, यदि कोई डाउनलोड विफलता, इंस्टॉलेशन पैकेज को पार्स करने में विफलता, या इंस्टॉलेशन अपवाद है, तो कृपया फिर से डाउनलोड और इंस्टॉल करें"
            },
            "login": {
                "accountLogin": "खाता लॉगिन",
                "noAccountYet": "अभी तक कोई खाता नहीं है?",
                "registerNow": "अभी रजिस्टर करें",
                "tabs": {
                    "username": "उपयोगकर्ता नाम लॉगिन",
                    "email": "ईमेल लॉगिन"
                },
                "inputs": {
                    "username": {
                        "placeholder": "उपयोगकर्ता नाम",
                        "validation": {
                            "required": "उपयोगकर्ता नाम आवश्यक है",
                            "min": "उपयोगकर्ता नाम कम से कम 3 वर्णों का होना चाहिए"
                        }
                    },
                    "email": {
                        "placeholder": "ई-मेल",
                        "validation": {
                            "required": "ईमेल आवश्यक है",
                            "invalid": "अमान्य ईमेल प्रारूप"
                        }
                    },
                    "password": {
                        "label": "पासवर्ड",
                        "placeholder": "पासवर्ड",
                        "validation": {
                            "required": "पासवर्ड आवश्यक है",
                            "min": "पासवर्ड कम से कम 6 वर्णों का होना चाहिए"
                        },
                        "show": "पासवर्ड दिखाएं",
                        "hide": "पासवर्ड छिपाएं"
                    }
                },
                "links": {
                    "forgot": "पासवर्ड भूल गए?",
                    "register": {
                        "text": "कोई खाता नहीं है?",
                        "link": "अभी रजिस्टर करें"
                    }
                },
                "buttons": {
                    "login": "लॉगिन"
                },
                "success": "सफल",
                "terms": {
                    "validation": {
                        "required": "आपको नियमों और शर्तों को स्वीकार करना होगा"
                    }
                },
                "errors": {
                    "userNotFound": "उपयोगकर्ता नहीं मिला",
                    "wrongPassword": "गलत पासवर्ड"
                }
            },
            "register": {
                "title": "रजिस्टर करें",
                "accountRegistration": "अकाउंट रजिस्ट्रेशन",
                "alreadyHaveAccount": "पहले से ही एक अकाउंट है?",
                "loginNow": "अभी लॉग इन करें",
                "inputs": {
                    "username": {
                        "placeholder": "यूज़रनेम",
                        "validation": {
                            "required": "यूज़रनेम ज़रूरी है",
                            "min": "यूज़रनेम कम से कम 5 अक्षर का होना चाहिए",
                            "matches": "यूज़रनेम एक अक्षर से शुरू होना चाहिए, जिसमें केवल अक्षर, नंबर, '_' या '.' हो सकता है, और यह किसी विशेष अक्षर या नंबर से शुरू या समाप्त नहीं हो सकता है।"
                        }
                    },
                    "email": {
                        "placeholder": "ई-मेल पता",
                        "validation": {
                            "required": "ईमेल ज़रूरी है",
                            "invalid": "अमान्य ईमेल प्रारूप"
                        }
                    },
                    "phone": {
                        "placeholder": "मोबाइल फ़ोन नंबर",
                        "validation": {
                            "required": "फ़ोन नंबर ज़रूरी है",
                            "digits": "फ़ोन नंबर में केवल अंक होने चाहिए"
                        }
                    },
                    "password": {
                        "placeholder": "लॉगिन पासवर्ड",
                        "validation": {
                            "required": "पासवर्ड ज़रूरी है",
                            "min": "पासवर्ड कम से कम 6 अक्षर का होना चाहिए"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "पासवर्ड की पुष्टि करें",
                        "validation": {
                            "required": "कृपया अपने पासवर्ड की पुष्टि करें",
                            "match": "पासवर्ड मेल खाना चाहिए"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "निमंत्रण कोड",
                        "validation": {
                            "required": "निमंत्रण कोड ज़रूरी है"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "ईमेल पहले से ही उपयोग में है",
                    "usernameTaken": "यूज़रनेम पहले से ही उपयोग में है",
                    "invalidReferral": "अमान्य रेफरल कोड"
                },
                "buttons": {
                    "register": "रजिस्टर करें"
                },
                "terms": {
                    "validation": {
                        "required": "आपको नियमों और शर्तों को स्वीकार करना होगा"
                    }
                },
                "links": {
                    "login": {
                        "text": "पहले से ही एक अकाउंट है?",
                        "link": "अभी लॉग इन करें"
                    }
                },
                "success": "सफलतापूर्वक रजिस्टर्ड",
                "countrySelector": {
                    "title": "देश चुनें"
                }
            },
            "terms": {
                "part1": "यूनाइटेड किंगडम में स्थित एक अकाउंट के साथ जारी रखकर, आप हमारी",
                "part2": "सेवा की शर्तों",
                "part3": "से सहमत हैं और स्वीकार करते हैं कि आपने हमारी",
                "part4": "गोपनीयता नीति",
                "title": "एटर्नोवा फ़िल्म्स गोपनीयता नीति"
            },
            "areaCode": {
                "label": "एरिया कोड चुनें"
            },
            "forgetPassword": {
                "title": "पासवर्ड भूल गए",
                "inputs": {
                    "email": {
                        "label": "ई-मेल",
                        "placeholder": "आपका ईमेल",
                        "validation": {
                            "required": "ईमेल ज़रूरी है",
                            "invalid": "अमान्य ईमेल प्रारूप"
                        }
                    },
                    "verificationCode": {
                        "label": "पुष्टि कोड",
                        "placeholder": "कृपया पुष्टि कोड दर्ज करें",
                        "validation": {
                            "required": "पुष्टि कोड ज़रूरी है"
                        },
                        "button": "पुष्टि कोड प्राप्त करें"
                    },
                    "newPassword": {
                        "label": "नया पासवर्ड",
                        "placeholder": "कृपया एक नया पासवर्ड दर्ज करें",
                        "validation": {
                            "required": "नया पासवर्ड ज़रूरी है",
                            "min": "पासवर्ड कम से कम 6 अक्षर का होना चाहिए"
                        },
                        "show": "पासवर्ड दिखाएँ",
                        "hide": "पासवर्ड छुपाएँ"
                    }
                },
                "buttons": {
                    "reset": "रीसेट करें"
                },
                "alerts": {
                    "emailRequired": "कृपया एक वैध ईमेल दर्ज करें",
                    "codeSent": "पुष्टि कोड आपके ईमेल पर भेजा गया है",
                    "sendError": "कोड भेजने में विफल",
                    "restSuccess": "पासवर्ड सफलतापूर्वक रीसेट हो गया है। कृपया लॉग इन करें।",
                    "emailNotFound": "ईमेल नहीं मिला",
                    "codeExpired": "कोड समाप्त हो गया है"
                }
            },
            "verifyFundsPassword": {
                "title": "फंड्स पासवर्ड सत्यापित करें",
                "inputs": {
                    "fundsPassword": {
                        "label": "फंड्स पासवर्ड",
                        "placeholder": "फंड्स पासवर्ड दर्ज करें",
                        "validation": {
                            "required": "फंड्स पासवर्ड ज़रूरी है",
                            "matches": "फंड्स पासवर्ड में ठीक 6 अंक होने चाहिए"
                        }
                    }
                },
                "buttons": {
                    "verify": "सत्यापित करें"
                },
                "alerts": {
                    "noFundsPassword": "कृपया लेनदेन पासवर्ड को बांधें",
                    "checkError": "फंड्स पासवर्ड की जाँच करते समय एक त्रुटि हुई",
                    "purchaseSuccess": "पैकेज सफलतापूर्वक खरीदा गया",
                    "withdrawalSuccess": "निकासी का अनुरोध सफलतापूर्वक किया गया",
                    "insufficientBalance": "अपर्याप्त शेष राशि",
                    "transferToTask": "कृपया अपनी शेष राशि को निकासी से सदस्य बिंदु पर स्थानांतरित करें",
                    "invalidPurchase": "अमान्य खरीद की शुरुआत",
                    "incorrectPassword": "गलत फंड्स पासवर्ड",
                    "purchaseError": "खरीद के दौरान एक त्रुटि हुई",
                    "wait48Hours": "फंड्स पासवर्ड बदलने के बाद निकासी के लिए कृपया 48 घंटे प्रतीक्षा करें",
                    "unauthorizedRequest": "अनाधिकृत अनुरोध",
                    "generalError": "एक त्रुटि हुई, कृपया बाद में पुनः प्रयास करें",
                    "tooManyAttempts": "बहुत सारे प्रयास, कृपया बाद में पुनः प्रयास करें"
                }
            },
            "setFundsPassword": {
                "title": "फंड्स पासवर्ड सेट करें",
                "inputs": {
                    "fundsPassword": {
                        "label": "फंड्स पासवर्ड",
                        "placeholder": "फंड्स पासवर्ड सेट करें",
                        "validation": {
                            "required": "फंड्स पासवर्ड ज़रूरी है",
                            "matches": "फंड्स पासवर्ड ठीक 6 अंकों का होना चाहिए"
                        }
                    },
                    "confirmPassword": {
                        "label": "फंड्स पासवर्ड की पुष्टि करें",
                        "placeholder": "फंड्स पासवर्ड की पुष्टि करें",
                        "validation": {
                            "required": "कृपया अपने फंड्स पासवर्ड की पुष्टि करें",
                            "matches": "पासवर्ड एक जैसे होने चाहिए"
                        }
                    }
                },
                "buttons": {
                    "save": "सेव करें"
                },
                "alerts": {
                    "success": "फंड्स पासवर्ड सफलतापूर्वक सेट हो गया",
                    "error": "फंड्स पासवर्ड सेट करते समय कोई गड़बड़ी हुई"
                }
            },
            "lang": {
                "title": "भाषा बदलें"
            },
            "reels": {
                "missionAreaLabel": "मिशन एरिया",
                "errors": {
                    "selectValidPackage": "कृपया वीआईपी मिशन चुनें",
                    "dailyLimitReached": "सीमा पूरी हो गई",
                    "notPurchased": "कोई पैकेज नहीं मिला",
                    "packageExpired": "पैकेज की समय सीमा समाप्त हो गई",
                    "alreadyLiked": "पहले ही देखा जा चुका है"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "वीआईपी मिशन एरिया"
                    }
                }
            },
            "agentPromotion": {
                "title": "एजेंसी प्रमोशन सिस्टम",
                "teamSize": "टीम का आकार",
                "nextStageTeamSize": "अगले चरण में टीम का आकार",
                "nextStageGroupPromotionReward": "अगले चरण का समूह प्रमोशन इनाम",
                "taskList": "कार्य सूची",
                "firstGenInvite": "पहले स्तर के सदस्य को आमंत्रित करें",
                "secondGenInvite": "दूसरे स्तर के सदस्य को आमंत्रित करें",
                "thirdGenInvite": "तीसरे स्तर के सदस्य को आमंत्रित करें",
                "lastWeekIncrease": "पिछले सप्ताह की बढ़ोतरी",
                "thisWeekIncrease": "इस सप्ताह की बढ़ोतरी",
                "available": "उपलब्ध",
                "receiveBtn": "पाएं",
                "levels": {
                    "beginnerCreator": "शुरुआती क्रिएटर",
                    "skilledSpecialist": "कुशल विशेषज्ञ",
                    "seniorSpecialist": "वरिष्ठ विशेषज्ञ",
                    "supervisor": "सुपरवाइज़र",
                    "seniorSupervisor": "वरिष्ठ सुपरवाइज़र",
                    "regionalManager": "क्षेत्रीय प्रबंधक",
                    "seniorManager": "वरिष्ठ प्रबंधक"
                }
            },
            "addressList": {
                "title": "पतों की सूची",
                "addAddressBtn": "पता जोड़ें",
                "bidingAddress": {
                    "title": "पता जोड़ना",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "रीचार्ज चैनल"
                        },
                        "mainnet": {
                            "label": "मेननेट"
                        },
                        "address": {
                            "label": "पता",
                            "placeholder": "कृपया पता दर्ज करें",
                            "validation": {
                                "required": "पता खाली नहीं हो सकता"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "पता अमान्य है, कृपया सही {{currency}}-{{network}} पता दर्ज करें",
                        "singleAddressLimit": "सिर्फ़ 1 पता जोड़ा जा सकता है, अगर आपको इसे बदलना है, तो कृपया ग्राहक सेवा से संपर्क करें",
                        "addressAlreadyExists": "यह पता पहले से मौजूद है, कृपया इसे दोबारा न जोड़ें"
                    },
                    "successBound": "पता सफलतापूर्वक जोड़ा गया"
                },
                "pleaseSelectAddress": "कृपया एक पता चुनें",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "यह पता पहले से ही इस्तेमाल में है। अगर आपको इसे बदलना है, तो कृपया ग्राहक सेवा से संपर्क करें।"
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "ज़रूरी बात"
                },
                "content": {
                    "deleteAddress": {
                        "main": "पता हटाने की पुष्टि करें"
                    }
                }
            },
            "watch": {
                "title": "यूट्यूब",
                "cantDislike": "नापसंद करने की अनुमति नहीं है",
                "subscribe": "सदस्यता लें",
                "subscribed": "सदस्यता ली गई",
                "subscribing": "सदस्यता ले रहे हैं",
                "views": "बार देखा गया",
                "explore": "खोजें"
            },
            "shortsRevenue": {
                "title": "शॉर्ट्स"
            },
            "telegram": {
                "title": "आधिकारिक टेलीग्राम",
                "joinGroup": "टेलीग्राम समूह में शामिल हों",
                "claimReward": "4 यूएसडीटी पाएं",
                "inputs": {
                    "username": {
                        "label": "टेलीग्राम यूज़रनेम",
                        "placeholder": "कृपया अपना टेलीग्राम यूज़रनेम दर्ज करें",
                        "validation": {
                            "required": "टेलीग्राम यूज़रनेम ज़रूरी है"
                        }
                    }
                },
                "rewardInstructions": "समूह में शामिल होने के इनाम से जुड़े निर्देश",
                "rewardInstruction1": "समूह में शामिल होने के इनाम के लिए आवेदन करने के लिए, कृपया अपने टेलीग्राम यूज़रनेम का इस्तेमाल करें।",
                "rewardInstruction2": "सिर्फ़ नए खाते ही इनाम पाने के योग्य हैं। जिन खातों को यह पहले ही मिल चुका है, वे समूह में शामिल होने के इनाम के लिए योग्य नहीं हैं।",
                "rewardStatuses": {
                    "pendingReview": "आपने पहले ही आवेदन कर दिया है। कृपया एडमिन के इनाम भेजने का इंतज़ार करें।",
                    "alreadyClaimed": "इनाम पहले ही पाया जा चुका है।",
                    "pendingReviewGr": "समूह में शामिल होने के इनाम की समीक्षा की जा रही है। सुनिश्चित करें कि जब एडमिन आपके अनुरोध की समीक्षा कर रहा हो, तब आप समूह में शामिल हों।",
                    "notInGroup": "आपने जो टेलीग्राम यूज़रनेम दर्ज किया है, वह समूह में नहीं है। कृपया दोबारा आवेदन करें। सुनिश्चित करें कि आप समूह में शामिल हो गए हैं और आपका टेलीग्राम यूज़रनेम सही है।",
                    "userNameUsed": "टेलीग्राम यूज़रनेम पहले ही इस्तेमाल हो चुका है। अगर आपको लगता है कि यह गलत है, तो ग्राहक सेवा से संपर्क करें।"
                }
            },
            "missionsCenter": {
                "title": "कार्य सूची",
                "direct": "सीधा कार्य",
                "team": "टीम का कार्य",
                "growth": "ग्रोथ टास्क",
                "progress": "प्रगति",
                "added": "इकट्ठा की जाने वाली संख्या: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "पा लिया गया",
                "isClaiming": "पा रहे हैं",
                "inProgress": "प्रगति में",
                "claimReward": "पाएं",
                "addDirectActiveMembers": "अपने पहले स्तर के {{count}} सदस्यों को किसी भी वीआईपी पैकेज की सदस्यता लेने के लिए सफलतापूर्वक आमंत्रित करें, और आपको {{reward}} यूएसडीटी मिलेंगे",
                "addTeamMembers": "जब आपके दूसरे और तीसरे स्तर के सदस्यों की वीआईपी1 या उससे ऊपर की सदस्यता कुल {{count}} सदस्यों तक पहुँच जाए, तो {{reward}} यूएसडीटी पाएं",
                "addGrowthMembers": "कुल {{count}} सक्रिय सदस्य जोड़ें",
                "rewardClaimed": "इनाम सफलतापूर्वक पाया गया",
                "claimFailed": "इनाम पाने में नाकामयाब रहे"
            }

        }
    },
    fr: {
        translation: {
            "global": {
                "copySuccess": "Copié",
                "days": "Jours",
                "insufficientBalance": "Solde insuffisant",
                "wait48hrs": "Veuillez attendre 48 heures après avoir changé le mot de passe des fonds pour retirer",
                "pleaseEnter": "Veuillez saisir",
                "save": "Enregistrer",
                "ok": "OK",
                "error": {
                    "invalidCode": "Code de vérification invalide",
                    "tryAgain": "Quelque chose a mal tourné, veuillez réessayer plus tard"
                },
                "saved": "Enregistré",
                "day": "Jour",
                "change": "Changer",
                "from": "De",
                "to": "À",
                "analyze": "Analyser",
                "total": "Total",
                "loading": "Chargement",
                "free": "Gratuit",
                "ongoingWithdrawal": "Un seul retrait peut être traité à la fois",
                "waitAfterSuccessWithdraw": "Les demandes de retrait ultérieures doivent être faites 24 heures après la finalisation du retrait précédent",
                "waitAfterCanceledWithdraw": "Veuillez attendre 24 heures après l'annulation d'un retrait avant d'en demander un autre",
                "todaysEarnings": "Gains d'aujourd'hui",
                "cumulativeEarnings": "Gains cumulés",
                "myLevel": "Mon niveau",
                "upgrade": "Mettre à niveau",
                "success": "succès",
                "stayTuned": "Restez à l'écoute",
                "months": {
                    "jan": "janv",
                    "feb": "févr",
                    "mar": "mars",
                    "apr": "avr",
                    "may": "mai",
                    "jun": "juin",
                    "jul": "juil",
                    "aug": "août",
                    "sep": "sept",
                    "oct": "oct",
                    "nov": "nov",
                    "dec": "déc"
                },
                "people": "Personnes",
                "views": "Vues",
                "dontRepeat": "Veuillez ne pas répéter la demande",
                "sending": "Envoi",

                "cancel": "Annuler",
                "confirm": "Confirmer",
                "selectCategory": "Sélectionner une catégorie"

            },
            "common": {
                "errorOccurred": "Une erreur est survenue"
            },
            "bottomBar": {
                "home": "Accueil",
                "team": "Équipe",
                "revenue": "Revenus",
                "record": "Musique",
                "mine": "Mien"
            },
            "home": {
                "viral": "Shorts",
                "tredningNow": "Films populaires",
                "seeMore": "Voir plus",
                "aboutUs": "à propos de nous",
                "help": "aide",
                "missionCenter": "centre de mission",
                "bonusDescription": "Description des bonus",
                "socialMedia": "Réseaux sociaux",
                "joinUs": "Rejoignez le groupe Telegram officiel d'Eternova Films et recevez 1 USDT en récompense.",
                "leader": "Partenaire de la ville Eternova Films",
                "home": "Accueil",
                "forYou": "Pour vous",
                "inviteFriends": "Inviter des amis",
                "inviteFriendsText": "Inviter des amis pour gagner des revenus",
                "annoucments": [
                    "Bienvenue sur Eternova Films ! Créez, partagez et gagnez de l'argent avec vos courtes vidéos."
                ]
            },
            "about": {
                "title": "À propos de l'entreprise"
            },
            "notices": {
                "title": "Avis",
                "translation": {
                    "eternovafilms_open": {
                        "title": "Bienvenue sur Eternova Films",
                        "content": "Nous sommes ravis de vous accueillir dans notre communauté. Eternova Films est plus qu'une simple plateforme : c'est une scène où le cinéma, la musique et la créativité brillent ensemble. Ici, vous découvrirez des histoires puissantes, des performances inoubliables et des opportunités de grandir aux côtés d'un public mondial de rêveurs et de créateurs. Que vous soyez ici pour profiter de films, explorer la musique ou participer à de nouvelles entreprises, votre voyage commence maintenant. Merci d'entrer dans ce monde avec nous — ensemble, nous construisons quelque chose d'intemporel. Rejoignez le groupe Telegram officiel et réclamez votre récompense de 1 USDT dès aujourd'hui !"
                    }
                }
            },
            "help": {
                "title": "Centre d'aide",
                "translation": {
                    "how_to_recharge": {
                        "title": "Comment recharger",
                        "content": "Ouvrez 'Mien' dans la barre inférieure. Allez dans 'Recharge & Retrait' → 'Recharger'. Choisissez votre devise et votre réseau principal, puis copiez l'adresse de dépôt."
                    },
                    "how_to_do_task_movie": {
                        "title": "Comment effectuer une tâche de film",
                        "content": "Ouvrez 'Revenus'. Trouvez votre forfait, appuyez sur 'Score' pour collecter des revenus, choisissez une vidéo, puis aimez-la."
                    },
                    "how_to_do_task_music": {
                        "title": "Comment effectuer une tâche musicale",
                        "content": "Ouvrez 'Musique'. Trouvez votre forfait, appuyez sur 'Score' pour collecter des revenus, choisissez une vidéo, puis aimez-la."
                    },
                    "how_to_withdraw": {
                        "title": "Comment retirer",
                        "content": "Ouvrez 'Mien' → 'Recharge & Retrait' → 'Retirer'. Sélectionnez la devise et le réseau principal, choisissez une adresse enregistrée, saisissez le montant, appuyez sur 'Confirmer le retrait', puis vérifiez avec votre mot de passe de financement."
                    },
                    "how_to_invite_friends": {
                        "title": "Comment inviter des amis",
                        "content": "Allez dans 'Équipe' → 'Inviter un ami'. Appuyez sur 'Copier' pour copier votre code d'invitation."
                    },
                    "how_to_register": {
                        "title": "Comment s'inscrire",
                        "content": "Sur la page d'inscription : entrez votre nom d'utilisateur et votre e-mail, sélectionnez l'indicatif de votre pays, entrez votre numéro de téléphone, créez et confirmez un mot de passe, ajoutez le code d'invitation, puis appuyez sur la flèche 'S'inscrire'."
                    },
                    "how_to_purchase_package_long": {
                        "title": "Comment acheter un forfait (Section Vidéo longue)",
                        "content": "Ouvrez 'VIP', choisissez un forfait, puis appuyez sur 'Déverrouiller maintenant'."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "Comment acheter un forfait (Section Shorts)",
                        "content": "Ouvrez 'Shorts', choisissez un forfait, puis appuyez sur 'Déverrouiller maintenant'."
                    },
                    "how_to_transfer_funds": {
                        "title": "Comment transférer des fonds de Recharge & Retrait vers Points de membre",
                        "content": "Ouvrez 'Mien' → 'Recharge & Retrait'. Appuyez sur l'icône de transfert (en haut à droite), sélectionnez la devise, entrez le montant, puis appuyez sur 'Confirmer le transfert'."
                    },
                    "how_to_reset_password": {
                        "title": "Comment réinitialiser le mot de passe",
                        "content": "Sur l'écran de connexion, appuyez sur 'Mot de passe oublié'. Entrez votre e-mail, appuyez sur 'Obtenir le code de vérification', entrez le code de votre e-mail, définissez un nouveau mot de passe, puis appuyez sur 'OK'."
                    },
                    "how_to_change_password": {
                        "title": "Comment changer le mot de passe",
                        "content": "Ouvrez 'Mien' → 'Mot de passe de connexion'. Entrez votre e-mail, appuyez sur 'Obtenir le code de vérification', entrez le code, définissez et confirmez votre nouveau mot de passe, puis appuyez sur 'OK'."
                    },
                    "how_to_set_funding_password": {
                        "title": "Comment définir le mot de passe de financement",
                        "content": "Ouvrez 'Mien' → 'Mot de passe de transaction'. Entrez votre e-mail, appuyez sur 'Obtenir le code de vérification', entrez le code, définissez et confirmez votre mot de passe de financement, puis appuyez sur 'OK'."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "Comment lier l'adresse de retrait",
                        "content": "Ouvrez 'Mien' → 'Recharge & Retrait'. Ouvrez la liste d'adresses → 'Ajouter une adresse'. Sélectionnez le canal et le réseau principal, entrez votre adresse de retrait, vérifiez via le code par e-mail, puis appuyez sur 'OK'."
                    },
                    "how_to_protect_my_account": {
                        "title": "Comment protéger mon compte",
                        "content": "Ouvrez 'Mien' → 'KYC utilisateur'. Entrez la nationalité et le nom réel, choisissez le type de document, remplissez le numéro de document, téléchargez les documents, puis appuyez sur 'Soumettre pour examen'."
                    }
                }
            },
            "helpDetails": {
                "title": "Tutoriel"
            },
            "introduction": {
                "title": "Explication des revenus"
            },
            "social": {
                "title": "Réseaux sociaux d'Eternova Films",
                "offical": "Réseaux sociaux",
                "officalTGChannel": "Chaîne Telegram officielle",
                "officalTGGroup": "Groupe Telegram officiel",
                "subscribers": "abonnés",
                "join": "Rejoindre",
                "officalIG": "Profil Instagram officiel",
                "follow": "Suivre",
                "followers": "abonnés",
                "community": "Communauté",
                "members": "membres",
                "new": "Nouveau",
                "errorRegion": "Veuillez acheter un pack pour accéder à ce groupe."
            },
            "notification": {
                "title": "Notification",
                "types": {
                    "eventNotification": "Notification d'événement",
                    "walletMessage": "Message du portefeuille",
                    "systemNotification": "Notification système"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "Demande de retrait",
                        "message": "Vous avez demandé un retrait de {{amount}} USDT. Veuillez patienter pour l'approbation. Numéro de commande : {{order_number}}, frais de gestion : {{fee}} USDT."
                    },
                    "withdrawal_approve": {
                        "title": "Retrait effectué",
                        "message": "Votre retrait a été effectué. Numéro de commande : {{order_number}}, montant : {{amount}}, frais de gestion : {{fee}} USDT."
                    },
                    "kyc_submitted": {
                        "title": "KYC Soumis",
                        "message": "Votre KYC a été soumis pour examen"
                    },
                    "kyc_approved": {
                        "title": "KYC Approuvé",
                        "message": "Votre KYC a été approuvé"
                    },
                    "kyc_rejected": {
                        "title": "KYC Rejeté",
                        "message": "Votre KYC a été rejeté"
                    }

                }
            },
            "notificationDetails": {
                "title": "Notification"
            },
            "team": {
                "title": "Équipe",
                "benefitAnalysis": "Analyse des bénéfices",
                "investmentIncome": "Revenus des investissements",
                "teamMemberListBtn": "Liste des membres de l'équipe",
                "inviteFriend": "Inviter un ami",
                "inviteFriendInfo": "Gagnez de l'argent en regardant des films",
                "totalIncome": "Revenu total de l'utilisateur",
                "todayIncome": "Revenu d'aujourd'hui",
                "todayInc": "Aujourd'hui",
                "teamTotal": "Montant total des souscriptions de l'équipe",
                "likesIncome": "Revenus des 'J'aime'",
                "teamIncome": "Revenus de l'équipe",
                "totalReturn": "Rendement total",
                "totalTeamMembers": "Nombre total de membres de l'équipe",
                "addedToday": "Ajoutés aujourd'hui",
                "firstGeneration": "Première génération",
                "totalMembers": "Membres totaux",
                "totalActiveMembers": "Actifs",
                "genTotalIncome": "Revenu total",
                "secondGeneration": "Deuxième génération",
                "thirdGeneration": "Troisième génération",
                "fourthGeneration": "Quatrième génération",
                "fifthGeneration": "Cinquième génération",
                "totalNumberOfFriends": "Nombre total d'amis",
                "activeFriends": "Amis actifs"
            },
            "myTeam": {
                "title": "Liste des membres de l'équipe",
                "id": "ID",
                "generation": "Génération",
                "registrationDate": "Date d'inscription",
                "noResults": "Aucun résultat",
                "noMoreResults": "Plus de résultats"
            },
            "invite": {
                "title": "Inviter un ami",
                "headline": "Gagnez de l'argent en regardant des films",
                "invitationLink": "Lien d'invitation",
                "invitationCode": "Code d'invitation"
            },
            "revenueMusic": {
                "title": "Centre des membres Musique"
            },
            "revenue": {
                "title": "Centre des membres",
                "score": {
                    "title": "Centre de notation",
                    "type": "Type",
                    "director": "Réalisateur",
                    "introduction": "Introduction",
                    "recommendations": "Recommandations associées",
                    "categories": {
                        "upcoming_movies": "Film à venir",
                        "popular_movies": "Film populaire"
                    },
                    "watch": "Regarder"
                },
                "specialPackage": "Packs spéciaux",
                "currentlevel": "Niveau actuel",
                "todayEarning": "Revenus d'aujourd'hui",
                "cumulativeEarning": "Revenus cumulés",
                "package": {
                    "view": "Voir",
                    "dailyPerView": "Vues quotidiennes",
                    "validTime": "Durée de validité",
                    "perViewIncome": "Revenu par vue",
                    "scoreBtn": "Notez pour gagner de l'argent",
                    "openSoon": "Bientôt disponible",
                    "stayTuned": "Restez à l'écoute",
                    "unlockNow": "Débloquer maintenant",
                    "expired": "Pack expiré",
                    "expiresIn": "Expire dans",
                    "totalReturn": "Rendement total",
                    "dailyReturn": "Rendement quotidien"
                },
                "packageDetails": "Détails",
                "packageExplain": "Détails des packs",
                "buy": {
                    "modal": {
                        "text": "Veuillez confirmer votre achat"
                    }
                }
            },
            "record": {
                "title": "Historique",
                "viewRating": "Voir les notes",
                "viewEarnings": "Voir les revenus",
                "noMoreRecords": "Plus d'historique"
            },
            "profile": {
                "ofcWeb": "Site web officiel",
                "partner": "Mécanisme de leader d'Eternova Films",
                "officalWebsite": "Lien du site web officiel",
                "instagramAccount": "Compte Instagram",
                "userKYC": "KYC de l'utilisateur",
                "telegram": "Télégramme",
                "scoreRecord": "Registre des scores",
                "loginPasswordTab": "Mot de passe de connexion",
                "transactionPasswordTab": "Mot de passe de transaction",
                "notification": "Notification",
                "switchLanguage": "Changer la langue",
                "contactCustomerService": "Contacter le service client",
                "appDownload": "Télécharger l'application",
                "logOut": "Déconnexion",
                "rechargeAndWithdraw": "Recharger et retirer",
                "unreleasedPoint": "Points non libérés",
                "memberPoint": "Points de membre",
                "details": {
                    "title": "Informations personnelles",
                    "nickname": "Surnom",
                    "enterNickname": "Entrez votre surnom",
                    "gender": "Genre",
                    "male": "Homme",
                    "female": "Femme",
                    "validation": {
                        "nickname": {
                            "required": "Le surnom est requis"
                        },
                        "telegram": {
                            "invalid": "Nom d'utilisateur Telegram invalide"
                        },
                        "whatsapp": {
                            "invalid": "Numéro WhatsApp invalide"
                        }
                    },
                    "updatedSuccess": "Profil mis à jour avec succès"
                },
                "kyc": {
                    "title": "Vérifié",
                    "errorPassport1": "Veuillez télécharger l'image de face du passeport",
                    "errorPassport2": "Veuillez télécharger un selfie avec votre passeport",
                    "errorID1": "Veuillez télécharger l'image de face de votre carte d'identité",
                    "errorID2": "Veuillez télécharger l'image de dos de votre carte d'identité",
                    "errorID3": "Veuillez télécharger un selfie avec votre carte d'identité",
                    "successMsg": "KYC soumis avec succès pour examen",
                    "errorMsg": "Échec de la soumission du KYC, veuillez réessayer",
                    "inputs": {
                        "nationality": {
                            "label": "Nationalité",
                            "placeholder": "Veuillez entrer la nationalité",
                            "validation": {
                                "required": "La nationalité est requise"
                            }
                        },
                        "name": {
                            "label": "Nom",
                            "placeholder": "Veuillez entrer votre nom",
                            "validation": {
                                "required": "Le nom est requis"
                            }
                        },
                        "documentNumber": {
                            "label": "Numéro de document",
                            "placeholder": "Veuillez entrer le numéro d'identité",
                            "validation": {
                                "required": "Le numéro de document est requis"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "Le type de document est requis"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "Types de documents",
                            "option1": "Carte d'identité",
                            "option2": "Passeport",
                            "idCard": "Carte d'identité",
                            "passport": "Passeport",
                        }
                    },
                    "uploadDocument": "Téléchargement de document",
                    "frontOfDocument": "Face du document",
                    "backOfDocument": "Dos du document",
                    "selfieHoldingDocument": "Selfie avec document",
                    "actionButton": "Soumettre pour examen",
                    "kycVerified": "Vos informations ont été examinées et vérifiées. Vos données personnelles ont été immédiatement supprimées. Le profil est de nouveau actif. Merci de votre coopération.",
                    "alreadySubmited": "Vous avez déjà soumis. Veuillez attendre que le processus d'examen soit terminé",
                    "underReview": "Votre demande de vérification est en cours d'examen",
                    "verified": "Votre vérification KYC est terminée. Vos documents ont été acceptés.",
                    "rejected": "La vérification KYC a échoué. Veuillez soumettre à nouveau vos documents.",
                },
                "loginPassword": {
                    "title": "Mot de passe de connexion",
                    "codeSent": "Code de vérification envoyé avec succès",
                    "changedSuccess": "Mot de passe changé avec succès",
                    "inputs": {
                        "email": {
                            "label": "Adresse e-mail",
                            "placeholder": "E-mail"
                        },
                        "verifyCode": {
                            "label": "Code de vérification",
                            "placeholder": "Veuillez entrer le code de vérification",
                            "sendBtn": "Envoyer",
                            "validation": {
                                "required": "Le code de vérification est requis"
                            }
                        },
                        "newPassword": {
                            "label": "Nouveau mot de passe",
                            "placeholder": "6-20 caractères alphanumériques",
                            "validation": {
                                "required": "Le nouveau mot de passe est requis",
                                "min": "Le mot de passe doit contenir au moins 6 caractères",
                                "max": "Le mot de passe ne peut pas dépasser 20 caractères"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Entrez à nouveau le mot de passe pour confirmer",
                            "validation": {
                                "required": "Veuillez confirmer votre mot de passe",
                                "oneOf": "Les mots de passe doivent correspondre"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "Mot de passe des fonds",
                    "codeSent": "Code de vérification envoyé avec succès",
                    "changedSuccess": "Mot de passe des fonds changé avec succès",
                    "changedSuccessBind": "Mot de passe des fonds lié avec succès",
                    "inputs": {
                        "email": {
                            "label": "Adresse e-mail",
                            "placeholder": "E-mail"
                        },
                        "verifyCode": {
                            "label": "Code de vérification",
                            "placeholder": "Veuillez entrer le code de vérification",
                            "sendBtn": "Envoyer",
                            "validation": {
                                "required": "Le code de vérification est requis"
                            }
                        },
                        "newPassword": {
                            "label": "Mot de passe des fonds",
                            "placeholder": "Combinaison de 6 chiffres",
                            "validation": {
                                "required": "Le nouveau mot de passe des fonds est requis",
                                "matches": "Le mot de passe des fonds doit être exactement de 6 chiffres"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Entrez à nouveau le mot de passe pour confirmer",
                            "validation": {
                                "required": "Veuillez confirmer votre mot de passe",
                                "oneOf": "Les mots de passe doivent correspondre"
                            }
                        }
                    },
                    "reminder": {
                        "title": "Rappel chaleureux",
                        "points": {
                            "point1": "Votre mot de passe des fonds est utilisé pour les transactions, les retraits et les paramètres de sécurité du compte. Il est recommandé de ne pas le rendre identique au mot de passe de connexion. En cas de vol de compte, ce site n'est pas responsable.",
                            "point2": "Après avoir changé le mot de passe des fonds, vous ne pouvez pas retirer d'argent dans les 48 heures"
                        }
                    }
                },
            },
            "wallet": {
                "title": "Recharger et retirer",
                "totalAssets": "Total des actifs",
                "recharge": "Recharger",
                "withdraw": "Retirer",
                "transfer": "Transférer",
                "assetDetails": "Détails des actifs",
                "cancelWithdrawal": "Annuler le retrait",
                "addresses": "Adresse",
                "filters": {
                    "all": "Tous",
                    "recharge": "Recharge",
                    "transfer": "Transfert",
                    "withdraw": "Retrait",
                    "levelPurchase": "Achat de niveau",
                    "taskReward": "Récompense de tâche",
                    "teamCommission": "Commission d'équipe",
                    "bonus": "Bonus",
                    "salary": "Salaire"
                },
                "timeRange": {
                    "title": "Sélectionner la plage de temps"
                },
                "status": {
                    "completed": "Terminé",
                    "rejected": "Rejeté",
                    "processing": "En cours",
                    "userCancel": "Annulé par l'utilisateur",
                    "scheduled": "Programmé",
                    "shouldArriveBy": "Devrait arriver d'ici",
                    "requiresAction": "Nécessite une action",
                    "requiresActionContact": "Veuillez effectuer la vérification KYC pour procéder au retrait."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "Êtes-vous sûr de vouloir annuler le retrait"
                    }
                }
            },
            "withdraw": {
                "title": "Retrait d'actifs",
                "currentlyAvailableAssets": "Actifs actuellement disponibles",
                "selectCurrency": "Sélectionner une devise",
                "mainnet": "Réseau principal",
                "withdrawalAddress": "Adresse de retrait",
                "withdrawalAddressPL": "Veuillez saisir l'adresse de retrait",
                "withdrawalAmount": "Montant du retrait",
                "withdrawalAmountAllowed": "Montant autorisé entre",
                "withdrawalAmountEnter": "Saisir le montant",
                "all": "Tout",
                "fees": "Frais",
                "incomeTax": "Impôt sur le revenu",
                "actualArrival": "Arrivée effective",
                "confirmWithdrawal": "Confirmer le retrait",
                "withdrawalInstructions": "Instructions de retrait",
                "withdrawalInstruction1": "Délai d'arrivée : la demande de retrait sera traitée dans un délai de 1 à 72 heures.",
                "withdrawalInstruction2": "Intervalle de retrait : il faut 24 heures après chaque arrivée réussie pour initier un retrait.",
                "withdrawalInstruction3": "Des frais de gestion de 1 USDT sont facturés pour chaque retrait.",
                "withdrawalInstruction4": "Norme fiscale",
                "withdrawalInstruction5": "1000 USDT et plus : exonéré d'impôt",
                "withdrawalInstruction6": "Les demandes de retrait ultérieures ne peuvent pas être initiées avant la réception du premier retrait.",
                "withdrawalInstruction7": "Montant minimum de retrait : 15 USDT.",
                "validation": {
                    "address": {
                        "required": "L'adresse de retrait est requise"
                    },
                    "amount": {
                        "required": "Veuillez saisir le montant du retrait",
                        "invalid": "Veuillez saisir le montant du retrait",
                        "min": "Le montant minimum de retrait est de 15 USDT",
                        "max": "Le montant maximum de retrait est de 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "Transfert",
                "transferSuccessfully": "Transfert réussi",
                "transferCurrency": "Devise de transfert",
                "rechargeAndWithdraw": "Recharge et retrait",
                "balance": "Solde",
                "memberPoint": "Point de membre",
                "transferAmount": "Montant du transfert",
                "all": "tout",
                "confirmTransfer": "Confirmer le transfert",
                "enterAmount": "Veuillez saisir le montant du transfert",
                "validation": {
                    "amount": {
                        "required": "Veuillez saisir le montant du transfert",
                        "invalid": "Le montant est requis",
                        "min": "Le montant minimum de transfert est de 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "Dépôt d'actifs",
                "selectCurrency": "Sélectionner une devise",
                "selectNetwork": "Sélectionner un réseau",
                "mainnet": "Réseau principal",
                "saveQRcode": "Sauvegarder le code QR",
                "depositAddress": "Adresse de dépôt",
                "note": "Note",
                "depositInstructions": "Instructions de dépôt",
                "instructions": [
                    "Avant de continuer, assurez-vous que le type de cryptomonnaie, le réseau principal et les informations de votre adresse sont exacts.",
                    "Le montant minimum de dépôt est de 8 USDT ; les dépôts inférieurs à ce montant ne seront pas crédités.",
                    "Ne déposez pas d'actifs autres que l'USDT ou l'USDC à cette adresse, car les fonds ne pourront pas être récupérés.",
                    "Obtenez toujours la dernière adresse de dépôt avant chaque transaction pour garantir la sécurité des fonds, car les adresses sont mises à jour périodiquement."
                ]
            },
            "unreleased": {
                "title": "Point non libéré",
                "desc": "Description des fonds à libérer",
                "burn": "Brûler",
                "burnCause": "Les récompenses d'invitation inférieures à la part de l'ami entraînent une combustion",
                "friendshipLevel": "Niveau d'amitié",
                "release": "Libérer",
                "releaseCondition": "Égal ou supérieur au montant qui peut être libéré par les amis",
                "info1": "Les fonds à libérer sont dus au fait que le niveau actuel est inférieur au niveau des amis de l'équipe, et la récompense d'invitation a été brûlée.",
                "info2": "Lorsque l'utilisateur passe à un niveau égal ou supérieur à celui de son ami de l'équipe, il peut obtenir cette partie du montant à libérer.",
                "toBeReleased": "Quota à libérer"
            },
            "memberPoint": {
                "title": "Point de membre",
                "totalAssets": "Actifs totaux",
                "assetDeposit": "Dépôt d'actifs",
                "assetDetails": "Détails des actifs"
            },
            "appDownload": {
                "title": "Téléchargement de l'application",
                "subtitle": "Téléchargez l'application pour une meilleure expérience",
                "googlePlay": {
                    "label": "Téléchargement sur le Google Play Store"
                },
                "appStore": {
                    "label": "Téléchargement sur l'App Store d'Apple"
                },
                "note": "Remarque : Pendant le processus de téléchargement et d'installation, s'il y a un échec de téléchargement, un échec d'analyse du paquet d'installation ou une exception d'installation, veuillez télécharger et installer à nouveau"
            },
            "login": {
                "accountLogin": "Connexion au compte",
                "noAccountYet": "Pas encore de compte ?",
                "registerNow": "S'inscrire maintenant",
                "tabs": {
                    "username": "Connexion par nom d'utilisateur",
                    "email": "Connexion par e-mail"
                },
                "inputs": {
                    "username": {
                        "placeholder": "Nom d'utilisateur",
                        "validation": {
                            "required": "Le nom d'utilisateur est requis",
                            "min": "Le nom d'utilisateur doit contenir au moins 3 caractères"
                        }
                    },
                    "email": {
                        "placeholder": "E-mail",
                        "validation": {
                            "required": "L'e-mail est requis",
                            "invalid": "Format d'e-mail invalide"
                        }
                    },
                    "password": {
                        "label": "Mot de passe",
                        "placeholder": "Mot de passe",
                        "validation": {
                            "required": "Le mot de passe est requis",
                            "min": "Le mot de passe doit contenir au moins 6 caractères"
                        },
                        "show": "Afficher le mot de passe",
                        "hide": "Masquer le mot de passe"
                    }
                },
                "links": {
                    "forgot": "Mot de passe oublié ?",
                    "register": {
                        "text": "Pas de compte ?",
                        "link": "S'inscrire maintenant"
                    }
                },
                "buttons": {
                    "login": "Connexion"
                },
                "success": "Réussi",
                "terms": {
                    "validation": {
                        "required": "Vous devez accepter les termes et conditions"
                    }
                },
                "errors": {
                    "userNotFound": "Utilisateur introuvable",
                    "wrongPassword": "Mot de passe incorrect"
                }
            },
            "register": {
                "title": "S'inscrire",
                "accountRegistration": "Création de compte",
                "alreadyHaveAccount": "Vous avez déjà un compte ?",
                "loginNow": "Connectez-vous maintenant",
                "inputs": {
                    "username": {
                        "placeholder": "Nom d'utilisateur",
                        "validation": {
                            "required": "Le nom d'utilisateur est requis",
                            "min": "Le nom d'utilisateur doit contenir au moins 5 caractères",
                            "matches": "Le nom d'utilisateur doit commencer par une lettre, ne peut contenir que des lettres, des chiffres, '_' ou '.', et ne peut pas commencer ou se terminer par un caractère spécial ou un chiffre."
                        }
                    },
                    "email": {
                        "placeholder": "Adresse e-mail",
                        "validation": {
                            "required": "L'e-mail est requis",
                            "invalid": "Format d'e-mail invalide"
                        }
                    },
                    "phone": {
                        "placeholder": "Numéro de téléphone portable",
                        "validation": {
                            "required": "Le numéro de téléphone est requis",
                            "digits": "Le numéro de téléphone doit contenir uniquement des chiffres"
                        }
                    },
                    "password": {
                        "placeholder": "Mot de passe de connexion",
                        "validation": {
                            "required": "Le mot de passe est requis",
                            "min": "Le mot de passe doit contenir au moins 6 caractères"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "Confirmer le mot de passe",
                        "validation": {
                            "required": "Veuillez confirmer votre mot de passe",
                            "match": "Les mots de passe doivent correspondre"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "Code d'invitation",
                        "validation": {
                            "required": "Le code d'invitation est requis"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "Cet e-mail est déjà utilisé",
                    "usernameTaken": "Ce nom d'utilisateur est déjà utilisé",
                    "invalidReferral": "Code de parrainage invalide"
                },
                "buttons": {
                    "register": "S'inscrire"
                },
                "terms": {
                    "validation": {
                        "required": "Vous devez accepter les conditions générales"
                    }
                },
                "links": {
                    "login": {
                        "text": "Vous avez déjà un compte ?",
                        "link": "Connectez-vous maintenant"
                    }
                },
                "success": "Inscription réussie",
                "countrySelector": {
                    "title": "Sélectionner le pays"
                }
            },
            "terms": {
                "part1": "En continuant avec un compte situé au Royaume-Uni, vous acceptez nos",
                "part2": "Conditions d'utilisation",
                "part3": "et reconnaissez avoir lu notre",
                "part4": "Politique de confidentialité.",
                "title": "Politique de confidentialité d'Eternova Films"
            },
            "areaCode": {
                "label": "Choisir l'indicatif régional"
            },
            "forgetPassword": {
                "title": "Mot de passe oublié",
                "inputs": {
                    "email": {
                        "label": "E-MAIL",
                        "placeholder": "Votre e-mail",
                        "validation": {
                            "required": "L'e-mail est requis",
                            "invalid": "Format d'e-mail invalide"
                        }
                    },
                    "verificationCode": {
                        "label": "Code de vérification",
                        "placeholder": "Veuillez saisir le code de vérification",
                        "validation": {
                            "required": "Le code de vérification est requis"
                        },
                        "button": "Obtenir le code de vérification"
                    },
                    "newPassword": {
                        "label": "Nouveau mot de passe",
                        "placeholder": "Veuillez saisir un nouveau mot de passe",
                        "validation": {
                            "required": "Le nouveau mot de passe est requis",
                            "min": "Le mot de passe doit contenir au moins 6 caractères"
                        },
                        "show": "Afficher le mot de passe",
                        "hide": "Masquer le mot de passe"
                    }
                },
                "buttons": {
                    "reset": "Réinitialiser"
                },
                "alerts": {
                    "emailRequired": "Veuillez saisir un e-mail valide",
                    "codeSent": "Code de vérification envoyé à votre e-mail",
                    "sendError": "Échec de l'envoi du code",
                    "restSuccess": "Mot de passe réinitialisé avec succès. Veuillez vous connecter.",
                    "emailNotFound": "E-mail non trouvé",
                    "codeExpired": "Code expiré"
                }
            },
            "verifyFundsPassword": {
                "title": "Vérifier le mot de passe des fonds",
                "inputs": {
                    "fundsPassword": {
                        "label": "Mot de passe des fonds",
                        "placeholder": "Saisir le mot de passe des fonds",
                        "validation": {
                            "required": "Le mot de passe des fonds est requis",
                            "matches": "Le mot de passe des fonds doit contenir exactement 6 chiffres"
                        }
                    }
                },
                "buttons": {
                    "verify": "Vérifier"
                },
                "alerts": {
                    "noFundsPassword": "Veuillez lier le mot de passe de transaction",
                    "checkError": "Une erreur s'est produite lors de la vérification du mot de passe des fonds",
                    "purchaseSuccess": "Forfait acheté avec succès",
                    "withdrawalSuccess": "Retrait demandé avec succès",
                    "insufficientBalance": "Solde insuffisant",
                    "transferToTask": "Veuillez transférer votre solde de retrait vers les points des membres",
                    "invalidPurchase": "Initiation d'achat invalide",
                    "incorrectPassword": "Mot de passe des fonds incorrect",
                    "purchaseError": "Une erreur s'est produite lors de l'achat",
                    "wait48Hours": "Veuillez attendre 48 heures après avoir changé le mot de passe des fonds pour effectuer un retrait",
                    "unauthorizedRequest": "Requête non autorisée",
                    "generalError": "Une erreur s'est produite, veuillez réessayer plus tard",
                    "tooManyAttempts": "Trop de tentatives, veuillez réessayer plus tard"
                }
            },
            "setFundsPassword": {
                "title": "Définir le mot de passe de fonds",
                "inputs": {
                    "fundsPassword": {
                        "label": "Mot de passe de fonds",
                        "placeholder": "Définir le mot de passe de fonds",
                        "validation": {
                            "required": "Le mot de passe de fonds est requis",
                            "matches": "Le mot de passe de fonds doit comporter exactement 6 chiffres"
                        }
                    },
                    "confirmPassword": {
                        "label": "Confirmer le mot de passe de fonds",
                        "placeholder": "Confirmer le mot de passe de fonds",
                        "validation": {
                            "required": "Veuillez confirmer votre mot de passe de fonds",
                            "matches": "Les mots de passe doivent correspondre"
                        }
                    }
                },
                "buttons": {
                    "save": "Enregistrer"
                },
                "alerts": {
                    "success": "Mot de passe de fonds défini avec succès",
                    "error": "Une erreur est survenue lors de la définition du mot de passe de fonds"
                }
            },
            "lang": {
                "title": "Changer de langue"
            },
            "reels": {
                "missionAreaLabel": "Zone de mission",
                "errors": {
                    "selectValidPackage": "Veuillez sélectionner une mission VIP",
                    "dailyLimitReached": "Limite atteinte",
                    "notPurchased": "Aucun forfait trouvé",
                    "packageExpired": "Forfait expiré",
                    "alreadyLiked": "Déjà regardé"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "Zone de mission VIP"
                    }
                }
            },
            "agentPromotion": {
                "title": "Système de promotion d'agence",
                "teamSize": "Taille de l'équipe",
                "nextStageTeamSize": "Taille de l'équipe pour le prochain niveau",
                "nextStageGroupPromotionReward": "Récompense de promotion de groupe pour le prochain niveau",
                "taskList": "Liste des tâches",
                "firstGenInvite": "Inviter un membre de premier niveau",
                "secondGenInvite": "Inviter un membre de deuxième niveau",
                "thirdGenInvite": "Inviter un membre de troisième niveau",
                "lastWeekIncrease": "Augmentation de la semaine dernière",
                "thisWeekIncrease": "Augmentation de cette semaine",
                "available": "Disponible",
                "receiveBtn": "Recevoir",
                "levels": {
                    "beginnerCreator": "Créateur débutant",
                    "skilledSpecialist": "Spécialiste qualifié",
                    "seniorSpecialist": "Spécialiste sénior",
                    "supervisor": "Superviseur",
                    "seniorSupervisor": "Superviseur sénior",
                    "regionalManager": "Directeur régional",
                    "seniorManager": "Directeur sénior"
                }
            },
            "addressList": {
                "title": "Liste des adresses",
                "addAddressBtn": "Ajouter une adresse",
                "bidingAddress": {
                    "title": "Adresse de liaison",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "Canal de recharge"
                        },
                        "mainnet": {
                            "label": "Mainnet"
                        },
                        "address": {
                            "label": "Adresse",
                            "placeholder": "Veuillez entrer l'adresse",
                            "validation": {
                                "required": "L'adresse ne peut pas être vide"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "L'adresse est invalide, veuillez entrer la bonne adresse {{currency}}-{{network}}",
                        "singleAddressLimit": "Seule une adresse peut être liée. Si vous avez besoin de la modifier, veuillez contacter le service client",
                        "addressAlreadyExists": "L'adresse existe déjà, veuillez ne pas l'ajouter à nouveau"
                    },
                    "successBound": "Adresse liée avec succès"
                },
                "pleaseSelectAddress": "Veuillez sélectionner une adresse",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "Cette adresse est déjà utilisée. Si vous avez besoin de la modifier, veuillez contacter le service client."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "Rappel"
                },
                "content": {
                    "deleteAddress": {
                        "main": "Confirmer la suppression de l'adresse"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "Le bouton Je n'aime pas n'est pas autorisé",
                "subscribe": "S'abonner",
                "subscribed": "Abonné",
                "subscribing": "Abonnement en cours",
                "views": "vues",
                "explore": "Explorer"
            },
            "shortsRevenue": {
                "title": "Shorts"
            },
            "telegram": {
                "title": "Telegram officiel",
                "joinGroup": "Rejoindre le groupe Telegram",
                "claimReward": "Réclamer 4 USDT",
                "inputs": {
                    "username": {
                        "label": "Nom d'utilisateur Telegram",
                        "placeholder": "Veuillez entrer votre nom d'utilisateur Telegram",
                        "validation": {
                            "required": "Le nom d'utilisateur Telegram est requis"
                        }
                    }
                },
                "rewardInstructions": "Instructions pour la récompense d'entrée de groupe",
                "rewardInstruction1": "Pour demander la récompense d'entrée de groupe, veuillez utiliser votre nom d'utilisateur Telegram.",
                "rewardInstruction2": "Seuls les nouveaux comptes sont éligibles pour recevoir la récompense. Les comptes qui l'ont déjà reçue ne sont pas éligibles pour la récompense d'entrée de groupe.",
                "rewardStatuses": {
                    "pendingReview": "Votre demande a été envoyée. Veuillez attendre que l'administrateur envoie la récompense.",
                    "alreadyClaimed": "Récompense déjà réclamée.",
                    "pendingReviewGr": "La récompense d'entrée de groupe est en attente de vérification. Assurez-vous d'avoir rejoint le groupe pendant que l'administrateur examine votre demande.",
                    "notInGroup": "Le nom d'utilisateur Telegram que vous avez entré n'est pas dans le groupe. Veuillez réessayer. Assurez-vous d'avoir rejoint le groupe et que votre nom d'utilisateur Telegram est correct.",
                    "userNameUsed": "Nom d'utilisateur Telegram déjà utilisé. Contactez le service client si vous pensez que c'est une erreur."
                }
            },
            "missionsCenter": {
                "title": "Liste des tâches",
                "direct": "Tâche directe",
                "team": "Tâche d'équipe",
                "growth": "Tâche de croissance",
                "progress": "Progression",
                "added": "Nombre à collecter: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "Réclamé",
                "isClaiming": "En cours de réclamation",
                "inProgress": "En cours",
                "claimReward": "Réclamer",
                "addDirectActiveMembers": "Invitez avec succès {{count}} membres de votre première génération à s'abonner à un forfait VIP, et vous recevrez {{reward}} USDT",
                "addTeamMembers": "Recevez {{reward}} USDT lorsque vos abonnements de deuxième et troisième génération à VIP1 ou plus atteignent un total de {{count}} membres",
                "addGrowthMembers": "Ajouter un total de {{count}} membres actifs",
                "rewardClaimed": "Récompense réclamée avec succès",
                "claimFailed": "Échec de la réclamation de la récompense"
            },

        }
    },
    zh: {
        translation: {
            "global": {
                "copySuccess": "已复制",
                "days": "天",
                "insufficientBalance": "余额不足",
                "wait48hrs": "更改资金密码后请等待48小时再提现",
                "pleaseEnter": "请输入",
                "save": "保存",
                "ok": "确定",
                "error": {
                    "invalidCode": "验证码无效",
                    "tryAgain": "出错了，请稍后再试"
                },
                "saved": "已保存",
                "day": "天",
                "change": "更改",
                "from": "从",
                "to": "到",
                "analyze": "分析",
                "total": "总计",
                "loading": "加载中",
                "free": "免费",
                "ongoingWithdrawal": "每次只能处理一笔提现",
                "waitAfterSuccessWithdraw": "提现成功后，需等待24小时才能再次发起提现请求",
                "waitAfterCanceledWithdraw": "取消提现后，请等待24小时再发起提现请求",
                "todaysEarnings": "今日收益",
                "cumulativeEarnings": "累计收益",
                "myLevel": "我的等级",
                "upgrade": "升级",
                "success": "成功",
                "stayTuned": "敬请期待",
                "months": {
                    "jan": "一月",
                    "feb": "二月",
                    "mar": "三月",
                    "apr": "四月",
                    "may": "五月",
                    "jun": "六月",
                    "jul": "七月",
                    "aug": "八月",
                    "sep": "九月",
                    "oct": "十月",
                    "nov": "十一月",
                    "dec": "十二月"
                },
                "people": "人",
                "views": "观看次数",
                "dontRepeat": "请不要重复请求",
                "sending": "发送中",

                "cancel": "取消",
                "confirm": "确认",
                "selectCategory": "选择类别"

            },
            "common": {
                "errorOccurred": "发生错误"
            },
            "bottomBar": {
                "home": "首页",
                "team": "团队",
                "revenue": "收入",
                "record": "音乐",
                "mine": "我的"
            },
            "home": {
                "viral": "短片",
                "tredningNow": "热门电影",
                "seeMore": "查看更多",
                "aboutUs": "关于我们",
                "help": "帮助",
                "missionCenter": "任务中心",
                "bonusDescription": "奖金说明",
                "socialMedia": "社交媒体",
                "joinUs": "加入Eternova Films官方Telegram群组，领取1 USDT奖励。",
                "leader": "Eternova Films城市合伙人",
                "home": "首页",
                "forYou": "为你推荐",
                "inviteFriends": "邀请好友",
                "inviteFriendsText": "邀请好友赚取收入",
                "annoucments": [
                    "欢迎来到Eternova Films！创建、分享您的短视频并从中赚钱。"
                ]
            },
            "about": {
                "title": "关于公司"
            },
            "notices": {
                "title": "公告",
                "translation": {
                    "eternovafilms_open": {
                        "title": "欢迎来到Eternova Films",
                        "content": "我们很高兴您能加入我们的社区。Eternova Films不仅仅是一个平台，它是一个让电影、音乐和创意共同闪耀的舞台。在这里，您将发现动人的故事、难忘的表演以及与全球追梦者和创作者共同成长的机会。无论您是来欣赏电影、探索音乐，还是参与新的项目，您的旅程现在就开始了。感谢您与我们一起步入这个世界——我们正在共同创造永恒之作。立即加入官方Telegram群组，领取您的1 USDT奖励吧！"
                    }
                }
            },
            "help": {
                "title": "帮助中心",
                "translation": {
                    "how_to_recharge": {
                        "title": "如何充值",
                        "content": "打开底部栏的“我的”。进入“充值与提现”→“充值”。选择您的币种和主网，然后复制充值地址。"
                    },
                    "how_to_do_task_movie": {
                        "title": "如何完成电影任务",
                        "content": "打开“收入”。找到您的套餐，点击“评分”来领取收入，选择一个视频，然后点赞。"
                    },
                    "how_to_do_task_music": {
                        "title": "如何完成音乐任务",
                        "content": "打开“音乐”。找到您的套餐，点击“评分”来领取收入，选择一个视频，然后点赞。"
                    },
                    "how_to_withdraw": {
                        "title": "如何提现",
                        "content": "打开“我的”→“充值与提现”→“提现”。选择币种和主网，选择一个已保存的地址，输入金额，点击“确认提现”，然后用您的资金密码进行验证。"
                    },
                    "how_to_invite_friends": {
                        "title": "如何邀请好友",
                        "content": "进入“团队”→“邀请好友”。点击“复制”来复制您的邀请码。"
                    },
                    "how_to_register": {
                        "title": "如何注册",
                        "content": "在注册页面：输入用户名和电子邮件，选择您的电话国家代码，输入您的电话号码，创建并确认密码，添加邀请码，然后点击“注册”箭头。"
                    },
                    "how_to_purchase_package_long": {
                        "title": "如何购买套餐（长视频区）",
                        "content": "打开“VIP”，选择一个套餐，然后点击“立即解锁”。"
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "如何购买套餐（短片区）",
                        "content": "打开“短片”，选择一个套餐，然后点击“立即解锁”。"
                    },
                    "how_to_transfer_funds": {
                        "title": "如何将资金从充值与提现转移到会员积分",
                        "content": "打开“我的”→“充值与提现”。点击转账图标（右上角），选择币种，输入金额，然后点击“确认转账”。"
                    },
                    "how_to_reset_password": {
                        "title": "如何重置密码",
                        "content": "在登录界面，点击“忘记密码”。输入您的电子邮件，点击“获取验证码”，输入您从电子邮件中收到的验证码，设置新密码，然后点击“确定”。"
                    },
                    "how_to_change_password": {
                        "title": "如何更改密码",
                        "content": "打开“我的”→“登录密码”。输入您的电子邮件，点击“获取验证码”，输入验证码，设置并确认您的新密码，然后点击“确定”。"
                    },
                    "how_to_set_funding_password": {
                        "title": "如何设置资金密码",
                        "content": "打开“我的”→“交易密码”。输入您的电子邮件，点击“获取验证码”，输入验证码，设置并确认您的资金密码，然后点击“确定”。"
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "如何绑定提现地址",
                        "content": "打开“我的”→“充值与提现”。打开地址列表→“添加地址”。选择渠道和主网，输入您的提现地址，通过电子邮件验证码进行验证，然后点击“确定”。"
                    },
                    "how_to_protect_my_account": {
                        "title": "如何保护我的账户",
                        "content": "打开“我的”→“用户KYC”。输入国籍和真实姓名，选择证件类型，填写证件号码，上传证件，然后点击“提交审核”。"
                    }
                }
            },
            "helpDetails": {
                "title": "教程"
            },
            "introduction": {
                "title": "收入说明"
            },
            "social": {
                "title": "Eternova Films社交媒体",
                "offical": "社交媒体",
                "officalTGChannel": "官方Telegram频道",
                "officalTGGroup": "官方Telegram群组",
                "subscribers": "订阅者",
                "join": "加入",
                "officalIG": "官方Instagram个人资料",
                "follow": "关注",
                "followers": "关注者",
                "community": "社区",
                "members": "成员",
                "new": "新",
                "errorRegion": "请购买套餐后才能加入此群组。"
            },
            "notification": {
                "title": "通知",
                "types": {
                    "eventNotification": "活动通知",
                    "walletMessage": "钱包消息",
                    "systemNotification": "系统通知"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "申请提现",
                        "message": "您已申请提现{{amount}} USDT，请等待审核，订单号：{{order_number}}，手续费：{{fee}} USDT"
                    },
                    "withdrawal_approve": {
                        "title": "提现完成",
                        "message": "您的提现已完成，订单号：{{order_number}}，金额：{{amount}}，手续费：{{fee}}USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC已提交",
                        "message": "您的KYC已提交审核"
                    },
                    "kyc_approved": {
                        "title": "KYC已通过",
                        "message": "您的KYC已通过审核"
                    },
                    "kyc_rejected": {
                        "title": "KYC已拒绝",
                        "message": "您的KYC已被拒绝"
                    }
                }
            },
            "notificationDetails": {
                "title": "通知"
            },
            "team": {
                "title": "团队",
                "benefitAnalysis": "收益分析",
                "investmentIncome": "投资收入",
                "teamMemberListBtn": "团队成员列表",
                "inviteFriend": "邀请好友",
                "inviteFriendInfo": "观看电影开始赚取收入",
                "totalIncome": "用户总收入",
                "todayIncome": "今日收入",
                "todayInc": "今日",
                "teamTotal": "团队订阅总金额",
                "likesIncome": "点赞收入",
                "teamIncome": "团队收入",
                "totalReturn": "总回报",
                "totalTeamMembers": "团队总成员",
                "addedToday": "今日新增",
                "firstGeneration": "一代",
                "totalMembers": "总成员",
                "totalActiveMembers": "活跃",
                "genTotalIncome": "总收入",
                "secondGeneration": "二代",
                "thirdGeneration": "三代",
                "fourthGeneration": "四代",
                "fifthGeneration": "五代",
                "totalNumberOfFriends": "好友总数",
                "activeFriends": "活跃好友"
            },
            "myTeam": {
                "title": "团队成员列表",
                "id": "ID",
                "generation": "代数",
                "registrationDate": "注册日期",
                "noResults": "无结果",
                "noMoreResults": "没有更多结果了"
            },
            "invite": {
                "title": "邀请好友",
                "headline": "观看电影开始赚取收入",
                "invitationLink": "邀请链接",
                "invitationCode": "邀请码"
            },
            "revenueMusic": {
                "title": "音乐会员中心"
            },
            "revenue": {
                "title": "会员中心",
                "score": {
                    "title": "评分中心",
                    "type": "类型",
                    "director": "导演",
                    "introduction": "简介",
                    "recommendations": "相关推荐",
                    "categories": {
                        "upcoming_movies": "即将上映的电影",
                        "popular_movies": "热门电影"
                    },
                    "watch": "观看"
                },
                "specialPackage": "特别套餐",
                "currentlevel": "当前等级",
                "todayEarning": "今日收入",
                "cumulativeEarning": "累计收入",
                "package": {
                    "view": "观看",
                    "dailyPerView": "每日观看次数",
                    "validTime": "有效期",
                    "perViewIncome": "每次观看收入",
                    "scoreBtn": "评分获取收入",
                    "openSoon": "即将开放",
                    "stayTuned": "敬请期待",
                    "unlockNow": "立即解锁",
                    "expired": "套餐已过期",
                    "expiresIn": "有效期至",
                    "totalReturn": "总回报",
                    "dailyReturn": "每日回报"
                },
                "packageDetails": "详情",
                "packageExplain": "套餐说明",
                "buy": {
                    "modal": {
                        "text": "请确认您要完成此购买"
                    }
                }
            },
            "record": {
                "title": "记录",
                "viewRating": "查看评分",
                "viewEarnings": "查看收入",
                "noMoreRecords": "没有更多记录了"
            },
            "profile": {
                "ofcWeb": "官方网站",
                "partner": "Eternova Films合伙人机制",
                "officalWebsite": "官方网站链接",
                "instagramAccount": "Instagram账户",
                "userKYC": "用户KYC",
                "telegram": "Telegram",
                "scoreRecord": "评分记录",
                "loginPasswordTab": "登录密码",
                "transactionPasswordTab": "交易密码",
                "notification": "通知",
                "switchLanguage": "切换语言",
                "contactCustomerService": "联系客服",
                "appDownload": "App下载",
                "logOut": "退出登录",
                "rechargeAndWithdraw": "充值与提现",
                "unreleasedPoint": "待释放积分",
                "memberPoint": "会员积分",
                "details": {
                    "title": "个人信息",
                    "nickname": "昵称",
                    "enterNickname": "输入您的昵称",
                    "gender": "性别",
                    "male": "男",
                    "female": "女",
                    "validation": {
                        "nickname": {
                            "required": "昵称是必填项"
                        },
                        "telegram": {
                            "invalid": "无效的Telegram用户名"
                        },
                        "whatsapp": {
                            "invalid": "无效的WhatsApp号码"
                        }
                    },
                    "updatedSuccess": "个人资料更新成功"
                },
                "kyc": {
                    "title": "已验证",
                    "errorPassport1": "请上传护照正面照片",
                    "errorPassport2": "请上传手持护照的自拍照",
                    "errorID1": "请上传身份证正面照片",
                    "errorID2": "请上传身份证背面照片",
                    "errorID3": "请上传手持身份证的自拍照",
                    "successMsg": "KYC已成功提交审核",
                    "errorMsg": "提交KYC失败，请重试",
                    "inputs": {
                        "nationality": {
                            "label": "国籍",
                            "placeholder": "请输入国籍",
                            "validation": {
                                "required": "国籍是必填项"
                            }
                        },
                        "name": {
                            "label": "姓名",
                            "placeholder": "请输入您的姓名",
                            "validation": {
                                "required": "姓名是必填项"
                            }
                        },
                        "documentNumber": {
                            "label": "证件号码",
                            "placeholder": "请输入证件号码",
                            "validation": {
                                "required": "证件号码是必填项"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "证件类型是必填项"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "证件类型",
                            "option1": "身份证",
                            "option2": "护照",
                            "idCard": "身份证",
                            "passport": "护照"
                        }
                    },
                    "uploadDocument": "上传证件",
                    "frontOfDocument": "证件正面",
                    "backOfDocument": "证件背面",
                    "selfieHoldingDocument": "手持证件自拍照",
                    "actionButton": "提交审核",
                    "kycVerified": "您的信息已审核并验证。您的个人详细信息已立即删除。您的账户已重新激活。感谢您的合作。",
                    "alreadySubmited": "您已提交，请等待审核完成",
                    "underReview": "您的验证请求正在审核中",
                    "verified": "您的KYC验证已完成，证件已被接受。",
                    "rejected": "KYC验证失败。请重新提交您的证件。",
                },
                "loginPassword": {
                    "title": "登录密码",
                    "codeSent": "验证码发送成功",
                    "changedSuccess": "密码更改成功",
                    "inputs": {
                        "email": {
                            "label": "电子邮件地址",
                            "placeholder": "电子邮件"
                        },
                        "verifyCode": {
                            "label": "验证码",
                            "placeholder": "请输入验证码",
                            "sendBtn": "发送",
                            "validation": {
                                "required": "验证码是必填项"
                            }
                        },
                        "newPassword": {
                            "label": "新密码",
                            "placeholder": "6-20位字母数字字符",
                            "validation": {
                                "required": "新密码是必填项",
                                "min": "密码至少为6个字符",
                                "max": "密码不能超过20个字符"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "再次输入密码以确认",
                            "validation": {
                                "required": "请确认您的密码",
                                "oneOf": "密码必须匹配"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "资金密码",
                    "codeSent": "验证码发送成功",
                    "changedSuccess": "资金密码更改成功",
                    "changedSuccessBind": "资金密码绑定成功",
                    "inputs": {
                        "email": {
                            "label": "电子邮件地址",
                            "placeholder": "电子邮件"
                        },
                        "verifyCode": {
                            "label": "验证码",
                            "placeholder": "请输入验证码",
                            "sendBtn": "发送",
                            "validation": {
                                "required": "验证码是必填项"
                            }
                        },
                        "newPassword": {
                            "label": "资金密码",
                            "placeholder": "6位数字组合",
                            "validation": {
                                "required": "新资金密码是必填项",
                                "matches": "资金密码必须是6位数字"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "再次输入密码以确认",
                            "validation": {
                                "required": "请确认您的密码",
                                "oneOf": "密码必须匹配"
                            }
                        }
                    },
                    "reminder": {
                        "title": "温馨提示",
                        "points": {
                            "point1": "您的资金密码用于交易、提现和账户安全设置。建议不要与登录密码保持一致，否则账户被盗本站概不负责。",
                            "point2": "更改资金密码后，48小时内无法提现"
                        }
                    }
                }
            },
            "withdraw": {
                "title": "资产提现",
                "currentlyAvailableAssets": "当前可用资产",
                "selectCurrency": "选择币种",
                "mainnet": "主网",
                "withdrawalAddress": "提现地址",
                "withdrawalAddressPL": "请输入提现地址",
                "withdrawalAmount": "提现金额",
                "withdrawalAmountAllowed": "允许金额范围",
                "withdrawalAmountEnter": "输入金额",
                "all": "全部",
                "fees": "手续费",
                "incomeTax": "所得税",
                "actualArrival": "实际到账",
                "confirmWithdrawal": "确认提现",
                "withdrawalInstructions": "提现说明",
                "withdrawalInstruction1": "到账时间：提现申请将在1-72小时内完成。",
                "withdrawalInstruction2": "提现间隔：每次成功到账后，需间隔24小时才能再次发起提现。",
                "withdrawalInstruction3": "每次提现收取1 USDT手续费。",
                "withdrawalInstruction4": "税费标准",
                "withdrawalInstruction5": "1000 USDT及以上：免税",
                "withdrawalInstruction6": "首次提现到账前，无法发起后续提现申请。",
                "withdrawalInstruction7": "最低提现金额：15 USDT。",
                "validation": {
                    "address": {
                        "required": "提现地址是必填项"
                    },
                    "amount": {
                        "required": "请输入提现金额",
                        "invalid": "请输入提现金额",
                        "min": "最低提现金额为15 USDT",
                        "max": "最高提现金额为50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "转账",
                "transferSuccessfully": "转账成功",
                "transferCurrency": "转账币种",
                "rechargeAndWithdraw": "充值与提现",
                "balance": "余额",
                "memberPoint": "会员积分",
                "transferAmount": "转账金额",
                "all": "全部",
                "confirmTransfer": "确认转账",
                "enterAmount": "请输入转账金额",
                "validation": {
                    "amount": {
                        "required": "请输入转账金额",
                        "invalid": "金额是必填项",
                        "min": "最低转账金额为1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "资产充值",
                "selectCurrency": "选择币种",
                "selectNetwork": "选择网络",
                "mainnet": "主网",
                "saveQRcode": "保存二维码",
                "depositAddress": "充值地址",
                "note": "注意",
                "depositInstructions": "充值说明",
                "instructions": [
                    "在继续操作前，请确保您的加密货币类型、主网络和地址信息准确无误。",
                    "最低充值金额为8 USDT；低于此金额的充值将无法到账。",
                    "请勿向此地址充值USDT或USDC以外的资产，否则资金将无法找回。",
                    "为确保资金安全，每次交易前请务必获取最新的充值地址，因为地址会定期更新。"
                ]
            },
            "unreleased": {
                "title": "待释放积分",
                "desc": "待释放资金说明",
                "burn": "销毁",
                "burnCause": "邀请奖励低于好友部分将导致销毁",
                "friendshipLevel": "好友等级",
                "release": "释放",
                "releaseCondition": "等于或高于好友可释放的金额",
                "info1": "待释放资金是因为当前等级低于团队好友的等级，并且邀请奖励已被销毁。",
                "info2": "当用户升级到与团队好友等级相等或更高时，他可以获得这部分待释放的金额。",
                "toBeReleased": "待释放额度"
            },
            "memberPoint": {
                "title": "会员积分",
                "totalAssets": "总资产",
                "assetDeposit": "资产充值",
                "assetDetails": "资产明细"
            },
            "appDownload": {
                "title": "App下载",
                "subtitle": "下载App以获得更好的体验",
                "googlePlay": {
                    "label": "Google Play商店下载"
                },
                "appStore": {
                    "label": "苹果商店下载"
                },
                "note": "注意：在下载和安装过程中，如果出现下载失败、安装包解析失败或安装异常，请重新下载并安装"
            },
            "login": {
                "accountLogin": "账户登录",
                "noAccountYet": "还没有账户？",
                "registerNow": "立即注册",
                "tabs": {
                    "username": "用户名登录",
                    "email": "邮箱登录"
                },
                "inputs": {
                    "username": {
                        "placeholder": "用户名",
                        "validation": {
                            "required": "用户名是必填项",
                            "min": "用户名至少为3个字符"
                        }
                    },
                    "email": {
                        "placeholder": "电子邮件",
                        "validation": {
                            "required": "电子邮件是必填项",
                            "invalid": "电子邮件格式无效"
                        }
                    },
                    "password": {
                        "label": "密码",
                        "placeholder": "密码",
                        "validation": {
                            "required": "密码是必填项",
                            "min": "密码至少为6个字符"
                        },
                        "show": "显示密码",
                        "hide": "隐藏密码"
                    }
                },
                "links": {
                    "forgot": "忘记密码？",
                    "register": {
                        "text": "没有账户？",
                        "link": "立即注册"
                    }
                },
                "buttons": {
                    "login": "登录"
                },
                "success": "成功",
                "terms": {
                    "validation": {
                        "required": "您必须接受条款和条件"
                    }
                },
                "errors": {
                    "userNotFound": "用户未找到",
                    "wrongPassword": "密码不正确"
                }
            },
            "register": {
                "title": "注册",
                "accountRegistration": "账户注册",
                "alreadyHaveAccount": "已有账户？",
                "loginNow": "立即登录",
                "inputs": {
                    "username": {
                        "placeholder": "用户名",
                        "validation": {
                            "required": "用户名是必填项",
                            "min": "用户名至少为5个字符",
                            "matches": "用户名必须以字母开头，只能包含字母、数字、'_'或'.'，且不能以特殊字符或数字开头或结尾。"
                        }
                    },
                    "email": {
                        "placeholder": "电子邮件地址",
                        "validation": {
                            "required": "电子邮件是必填项",
                            "invalid": "电子邮件格式无效"
                        }
                    },
                    "phone": {
                        "placeholder": "手机号码",
                        "validation": {
                            "required": "手机号码是必填项",
                            "digits": "手机号码只能包含数字"
                        }
                    },
                    "password": {
                        "placeholder": "登录密码",
                        "validation": {
                            "required": "密码是必填项",
                            "min": "密码至少为6个字符"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "确认密码",
                        "validation": {
                            "required": "请确认您的密码",
                            "match": "密码必须匹配"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "邀请码",
                        "validation": {
                            "required": "邀请码是必填项"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "电子邮件已被使用",
                    "usernameTaken": "用户名已被使用",
                    "invalidReferral": "邀请码无效"
                },
                "buttons": {
                    "register": "注册"
                },
                "terms": {
                    "validation": {
                        "required": "您必须接受条款和条件"
                    }
                },
                "links": {
                    "login": {
                        "text": "已有账户？",
                        "link": "立即登录"
                    }
                },
                "success": "注册成功",
                "countrySelector": {
                    "title": "选择国家"
                }
            },
            "terms": {
                "part1": "继续使用在英国的账户，即表示您同意我们的",
                "part2": "服务条款",
                "part3": "并确认您已阅读我们的",
                "part4": "隐私政策。",
                "title": "Eternova Films隐私政策"
            },
            "areaCode": {
                "label": "选择区号"
            },
            "forgetPassword": {
                "title": "忘记密码",
                "inputs": {
                    "email": {
                        "label": "电子邮件",
                        "placeholder": "您的电子邮件",
                        "validation": {
                            "required": "电子邮件是必填项",
                            "invalid": "电子邮件格式无效"
                        }
                    },
                    "verificationCode": {
                        "label": "验证码",
                        "placeholder": "请输入验证码",
                        "validation": {
                            "required": "验证码是必填项"
                        },
                        "button": "获取验证码"
                    },
                    "newPassword": {
                        "label": "新密码",
                        "placeholder": "请输入新密码",
                        "validation": {
                            "required": "新密码是必填项",
                            "min": "密码至少为6个字符"
                        },
                        "show": "显示密码",
                        "hide": "隐藏密码"
                    }
                },
                "buttons": {
                    "reset": "重置"
                },
                "alerts": {
                    "emailRequired": "请输入有效的电子邮件",
                    "codeSent": "验证码已发送至您的电子邮件",
                    "sendError": "发送代码失败",
                    "restSuccess": "密码重置成功。请登录。",
                    "emailNotFound": "未找到电子邮件",
                    "codeExpired": "验证码已过期"
                }
            },
            "verifyFundsPassword": {
                "title": "验证资金密码",
                "inputs": {
                    "fundsPassword": {
                        "label": "资金密码",
                        "placeholder": "输入资金密码",
                        "validation": {
                            "required": "资金密码是必填项",
                            "matches": "资金密码必须是6位数字"
                        }
                    }
                },
                "buttons": {
                    "verify": "验证"
                },
                "alerts": {
                    "noFundsPassword": "请绑定交易密码",
                    "checkError": "检查资金密码时发生错误",
                    "purchaseSuccess": "套餐购买成功",
                    "withdrawalSuccess": "提现请求成功",
                    "insufficientBalance": "余额不足",
                    "transferToTask": "请将您的余额从提现余额转入会员积分",
                    "invalidPurchase": "无效的购买请求",
                    "incorrectPassword": "资金密码不正确",
                    "purchaseError": "购买时发生错误",
                    "wait48Hours": "更改资金密码后请等待48小时再提现",
                    "unauthorizedRequest": "未授权的请求",
                    "generalError": "发生错误，请稍后再试",
                    "tooManyAttempts": "尝试次数过多，请稍后再试"
                }
            },
            "setFundsPassword": {
                "title": "设置资金密码",
                "inputs": {
                    "fundsPassword": {
                        "label": "资金密码",
                        "placeholder": "设置资金密码",
                        "validation": {
                            "required": "资金密码是必填项",
                            "matches": "资金密码必须是6位数字"
                        }
                    },
                    "confirmPassword": {
                        "label": "确认资金密码",
                        "placeholder": "确认资金密码",
                        "validation": {
                            "required": "请确认您的资金密码",
                            "matches": "密码必须匹配"
                        }
                    }
                },
                "buttons": {
                    "save": "保存"
                },
                "alerts": {
                    "success": "资金密码设置成功",
                    "error": "设置资金密码时发生错误"
                }
            },
            "lang": {
                "title": "切换语言"
            },
            "reels": {
                "missionAreaLabel": "任务区",
                "errors": {
                    "selectValidPackage": "请选择VIP任务",
                    "dailyLimitReached": "已达到每日限制",
                    "notPurchased": "未找到套餐",
                    "packageExpired": "套餐已过期",
                    "alreadyLiked": "已观看"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "VIP任务区"
                    }
                }
            },
            "agentPromotion": {
                "title": "代理推广系统",
                "teamSize": "团队规模",
                "nextStageTeamSize": "下一阶段团队规模",
                "nextStageGroupPromotionReward": "下一阶段团队推广奖励",
                "taskList": "任务列表",
                "firstGenInvite": "邀请一名一级会员",
                "secondGenInvite": "邀请一名二级会员",
                "thirdGenInvite": "邀请一名三级会员",
                "lastWeekIncrease": "上周新增",
                "thisWeekIncrease": "本周新增",
                "available": "可用",
                "receiveBtn": "领取",
                "levels": {
                    "beginnerCreator": "初级创作者",
                    "skilledSpecialist": "熟练专家",
                    "seniorSpecialist": "资深专家",
                    "supervisor": "主管",
                    "seniorSupervisor": "高级主管",
                    "regionalManager": "区域经理",
                    "seniorManager": "高级经理"
                }
            },
            "addressList": {
                "title": "地址列表",
                "addAddressBtn": "添加地址",
                "bidingAddress": {
                    "title": "绑定地址",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "充值渠道"
                        },
                        "mainnet": {
                            "label": "主网"
                        },
                        "address": {
                            "label": "地址",
                            "placeholder": "请输入地址",
                            "validation": {
                                "required": "地址不能为空"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "地址无效，请输入正确的{{currency}}-{{network}}地址",
                        "singleAddressLimit": "只允许绑定1个地址，如需更改请联系客服",
                        "addressAlreadyExists": "地址已存在，请勿重复添加"
                    },
                    "successBound": "地址绑定成功"
                },
                "pleaseSelectAddress": "请选择地址",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "此地址已在使用中。如需更改，请联系客服。"
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "温馨提示"
                },
                "content": {
                    "deleteAddress": {
                        "main": "确认删除地址"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "不允许踩",
                "subscribe": "订阅",
                "subscribed": "已订阅",
                "subscribing": "订阅中",
                "views": "观看次数",
                "explore": "探索"
            },
            "shortsRevenue": {
                "title": "短片"
            },
            "telegram": {
                "title": "官方Telegram",
                "joinGroup": "加入Telegram群组",
                "claimReward": "领取4 USDT",
                "inputs": {
                    "username": {
                        "label": "Telegram用户名",
                        "placeholder": "请输入您的Telegram用户名",
                        "validation": {
                            "required": "Telegram用户名是必填项"
                        }
                    }
                },
                "rewardInstructions": "入群奖励说明",
                "rewardInstruction1": "要申请入群奖励，请使用您的Telegram用户名。",
                "rewardInstruction2": "只有新账户有资格领取奖励。已领取过奖励的账户没有资格获得入群奖励。",
                "rewardStatuses": {
                    "pendingReview": "您已申请。请等待管理员发放奖励。",
                    "alreadyClaimed": "奖励已领取。",
                    "pendingReviewGr": "入群奖励正在审核中。请确保您已加入群组，等待管理员审核您的请求。",
                    "notInGroup": "您输入的Telegram用户名不在群组中。请重新申请。请确保您已加入群组并且Telegram用户名正确无误。",
                    "userNameUsed": "Telegram用户名已被使用。如果您认为有误，请联系客服。"
                }
            },
            "missionsCenter": {
                "title": "任务列表",
                "direct": "直推任务",
                "team": "团队任务",
                "growth": "成长任务",
                "progress": "进度",
                "added": "待领取数量：<span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "已领取",
                "isClaiming": "领取中",
                "inProgress": "进行中",
                "claimReward": "领取",
                "addDirectActiveMembers": "成功邀请{{count}}名一代会员订阅任何VIP套餐，您将获得{{reward}} USDT",
                "addTeamMembers": "当您的二代和三代会员订阅VIP1或以上套餐总计达到{{count}}人时，您将获得{{reward}} USDT",
                "addGrowthMembers": "新增{{count}}名活跃会员总数",
                "rewardClaimed": "奖励领取成功",
                "claimFailed": "领取奖励失败"
            }
        }
    },
    tr: {
        translation: {
            "global": {
                "copySuccess": "Kopyalandı",
                "days": "Gün",
                "insufficientBalance": "Yetersiz bakiye",
                "wait48hrs": "Para çekme işlemi için lütfen fon şifresini değiştirdikten sonra 48 saat bekleyin",
                "pleaseEnter": "Lütfen girin",
                "save": "Kaydet",
                "ok": "Tamam",
                "error": {
                    "invalidCode": "Geçersiz doğrulama kodu",
                    "tryAgain": "Bir şeyler yanlış gitti, daha sonra tekrar deneyin"
                },
                "saved": "Kaydedildi",
                "day": "Gün",
                "change": "Değiştir",
                "from": "Kimden",
                "to": "Kime",
                "analyze": "Analiz et",
                "total": "Toplam",
                "loading": "Yükleniyor",
                "free": "Ücretsiz",
                "ongoingWithdrawal": "Aynı anda sadece bir para çekme işlemi gerçekleştirilebilir",
                "waitAfterSuccessWithdraw": "Sonraki para çekme talepleri, bir önceki çekimin tamamlanmasından 24 saat sonra yapılmalıdır",
                "waitAfterCanceledWithdraw": "Başka bir para çekme talebinde bulunmadan önce, iptal edilen bir çekimden sonra lütfen 24 saat bekleyin",
                "todaysEarnings": "Bugünün Kazançları",
                "cumulativeEarnings": "Kümülatif Kazançlar",
                "myLevel": "Seviyem",
                "upgrade": "Yükselt",
                "success": "Başarılı",
                "stayTuned": "Takipte kalın",
                "months": {
                    "jan": "Oca",
                    "feb": "Şub",
                    "mar": "Mar",
                    "apr": "Nis",
                    "may": "May",
                    "jun": "Haz",
                    "jul": "Tem",
                    "aug": "Ağu",
                    "sep": "Eyl",
                    "oct": "Eki",
                    "nov": "Kas",
                    "dec": "Ara"
                },
                "people": "Kişi",
                "views": "Görüntüleme",
                "dontRepeat": "Lütfen isteği tekrarlamayın",
                "sending": "Gönderiliyor",

                "cancel": "İptal",
                "confirm": "Onayla",
                "selectCategory": "Kategori Seç"

            },
            "common": {
                "errorOccurred": "Bir hata oluştu"
            },
            "bottomBar": {
                "home": "Anasayfa",
                "team": "Takım",
                "revenue": "Gelir",
                "record": "Müzik",
                "mine": "Benim"
            },
            "home": {
                "viral": "Kısa Videolar",
                "tredningNow": "Popüler filmler",
                "seeMore": "Daha fazlasını gör",
                "aboutUs": "hakkımızda",
                "help": "yardım",
                "missionCenter": "görev merkezi",
                "bonusDescription": "Bonus açıklaması",
                "socialMedia": "Sosyal Medya",
                "joinUs": "Resmi Eternova Films Telegram grubuna katılın ve 1 USDT ödül kazanın.",
                "leader": "Eternova Films Şehir Ortağı",
                "home": "Anasayfa",
                "forYou": "Sizin İçin",
                "inviteFriends": "Arkadaşları davet et",
                "inviteFriendsText": "Gelir elde etmek için arkadaşlarınızı davet edin",
                "annoucments": [
                    "Eternova Films'e hoş geldiniz! Kısa videolarınızı oluşturun, paylaşın ve kazanç elde edin."
                ]
            },
            "about": {
                "title": "Şirket Hakkında"
            },
            "notices": {
                "title": "Duyurular",
                "translation": {
                    "eternovafilms_open": {
                        "title": "Eternova Films'e Hoş Geldiniz",
                        "content": "Topluluğumuza katıldığınız için çok heyecanlıyız. Eternova Films, sadece bir platformdan daha fazlasıdır; sinemanın, müziğin ve yaratıcılığın bir araya geldiği bir sahnedir. Burada güçlü hikayeleri, unutulmaz performansları ve hayalperestlerden ve yaratıcılardan oluşan küresel bir kitleyle birlikte büyüme fırsatlarını keşfedeceksiniz. İster film izlemek, ister müzik keşfetmek, ister yeni girişimlerde yer almak için burada olun, yolculuğunuz şimdi başlıyor. Bu dünyaya bizimle adım attığınız için teşekkür ederiz - birlikte zamansız bir şeyler inşa ediyoruz. Resmi Telegram grubuna katılın ve 1 USDT ödülünüzü bugün alın!"
                    }
                }
            },
            "help": {
                "title": "Yardım Merkezi",
                "translation": {
                    "how_to_recharge": {
                        "title": "Nasıl Yükleme Yapılır",
                        "content": "Alt çubuktan 'Benim'e girin. 'Yükleme & Çekme' → 'Yükleme'ye gidin. Para biriminizi ve ana ağı seçin, ardından yatırma adresini kopyalayın."
                    },
                    "how_to_do_task_movie": {
                        "title": "Film Görevi Nasıl Yapılır",
                        "content": "'Gelir'e girin. Paketinizi bulun, gelir toplamak için 'Puan'a dokunun, bir video seçin ve beğenin."
                    },
                    "how_to_do_task_music": {
                        "title": "Müzik Görevi Nasıl Yapılır",
                        "content": "'Müzik'e girin. Paketinizi bulun, gelir toplamak için 'Puan'a dokunun, bir video seçin ve beğenin."
                    },
                    "how_to_withdraw": {
                        "title": "Nasıl Çekilir",
                        "content": "'Benim' → 'Yükleme & Çekme' → 'Çek'e girin. Para birimini ve ana ağı seçin, kaydedilmiş bir adres seçin, miktarı girin, 'Çekimi Onayla'ya dokunun ve fon şifrenizle doğrulayın."
                    },
                    "how_to_invite_friends": {
                        "title": "Arkadaş Nasıl Davet Edilir",
                        "content": "'Takım' → 'Arkadaş Davet Et'e gidin. Davet kodunuzu kopyalamak için 'Kopyala'ya dokunun."
                    },
                    "how_to_register": {
                        "title": "Nasıl Kayıt Olunur",
                        "content": "Kayıt sayfasında: kullanıcı adı ve e-posta girin, telefon ülke kodunuzu seçin, telefon numaranızı girin, bir şifre oluşturun ve onaylayın, davet kodunu ekleyin, ardından 'Kayıt Ol' okuna dokunun."
                    },
                    "how_to_purchase_package_long": {
                        "title": "Nasıl Paket Satın Alınır (Uzun Video Bölümü)",
                        "content": "'VIP'e girin, bir paket seçin, ardından 'Şimdi Aç'a dokunun."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "Nasıl Paket Satın Alınır (Kısa Videolar Bölümü)",
                        "content": "'Kısa Videolar'a girin, bir paket seçin, ardından 'Şimdi Aç'a dokunun."
                    },
                    "how_to_transfer_funds": {
                        "title": "Yükleme & Çekme'den Üye Puanlarına Nasıl Fon Transferi Yapılır",
                        "content": "'Benim' → 'Yükleme & Çekme'ye girin. Transfer simgesine (sağ üst) dokunun, para birimini seçin, miktarı girin, ardından 'Transferi Onayla'ya dokunun."
                    },
                    "how_to_reset_password": {
                        "title": "Şifre Nasıl Sıfırlanır",
                        "content": "Giriş ekranında, 'Şifremi Unuttum'a dokunun. E-posta adresinizi girin, 'Doğrulama Kodunu Al'a dokunun, e-postanızdan gelen kodu girin, yeni bir şifre belirleyin, ardından 'Tamam'a dokunun."
                    },
                    "how_to_change_password": {
                        "title": "Şifre Nasıl Değiştirilir",
                        "content": "'Benim' → 'Giriş Şifresi'ne girin. E-posta adresinizi girin, 'Doğrulama Kodunu Al'a dokunun, kodu girin, yeni şifrenizi belirleyin ve onaylayın, ardından 'Tamam'a dokunun."
                    },
                    "how_to_set_funding_password": {
                        "title": "Fon Şifresi Nasıl Ayarlanır",
                        "content": "'Benim' → 'İşlem Şifresi'ne girin. E-posta adresinizi girin, 'Doğrulama Kodunu Al'a dokunun, kodu girin, fon şifrenizi belirleyin ve onaylayın, ardından 'Tamam'a dokunun."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "Çekim Adresi Nasıl Bağlanır",
                        "content": "'Benim' → 'Yükleme & Çekme'ye girin. Adres listesini açın → 'Adres Ekle'. Kanalı ve ana ağı seçin, çekim adresinizi girin, e-posta koduyla doğrulayın, ardından 'Tamam'a dokunun."
                    },
                    "how_to_protect_my_account": {
                        "title": "Hesabımı Nasıl Korurum",
                        "content": "'Benim' → 'Kullanıcı KYC'ye girin. Uyruk ve gerçek adı girin, belge türünü seçin, belge numarasını doldurun, belgeleri yükleyin, ardından 'İncelemeye Gönder'e dokunun."
                    }
                }
            },
            "helpDetails": {
                "title": "Eğitim"
            },
            "introduction": {
                "title": "Gelir Açıklaması"
            },
            "social": {
                "title": "Eternova Films Sosyal Medya",
                "offical": "Sosyal Medya",
                "officalTGChannel": "Resmi Telegram Kanalı",
                "officalTGGroup": "Resmi Telegram Grubu",
                "subscribers": "abone",
                "join": "Katıl",
                "officalIG": "Resmi Instagram Profili",
                "follow": "Takip Et",
                "followers": "takipçi",
                "community": "Topluluk",
                "members": "üye",
                "new": "Yeni",
                "errorRegion": "Bu gruba erişmek için lütfen bir paket satın alın."
            },
            "notification": {
                "title": "Bildirim",
                "types": {
                    "eventNotification": "Etkinlik Bildirimi",
                    "walletMessage": "Cüzdan Mesajı",
                    "systemNotification": "Sistem Bildirimi"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "Para Çekme Başvurusu",
                        "message": "{{amount}} miktarlı USDT çekme başvurusunda bulundunuz, lütfen onayı bekleyin, sipariş numarası: {{order_number}}, işlem ücreti: {{fee}}USDT"
                    },
                    "withdrawal_approve": {
                        "title": "Para Çekme Tamamlandı",
                        "message": "Para çekme işleminiz tamamlandı, sipariş numarası: {{order_number}}, miktar: {{amount}}, işlem ücreti: {{fee}}USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC Gönderildi",
                        "message": "KYC başvurunuz incelemeye gönderildi"
                    },
                    "kyc_approved": {
                        "title": "KYC Onaylandı",
                        "message": "KYC'niz onaylandı"
                    },
                    "kyc_rejected": {
                        "title": "KYC Reddedildi",
                        "message": "KYC'niz reddedildi"
                    }
                }
            },
            "notificationDetails": {
                "title": "Bildirim"
            },
            "team": {
                "title": "Takım",
                "benefitAnalysis": "Fayda Analizi",
                "investmentIncome": "Yatırım Geliri",
                "teamMemberListBtn": "Takım Üye Listesi",
                "inviteFriend": "Arkadaş Davet Et",
                "inviteFriendInfo": "Film izleyerek gelir elde etmeye başlayın",
                "totalIncome": "Toplam kullanıcı geliri",
                "todayIncome": "Bugünkü Gelir",
                "todayInc": "Bugün",
                "teamTotal": "Takım için toplam abonelik tutarı",
                "likesIncome": "Beğeni Geliri",
                "teamIncome": "Takım Geliri",
                "totalReturn": "Toplam Getiri",
                "totalTeamMembers": "Toplam Takım Üyesi",
                "addedToday": "Bugün Katılan",
                "firstGeneration": "Birinci Nesil",
                "totalMembers": "Toplam Üye",
                "totalActiveMembers": "Aktif",
                "genTotalIncome": "Toplam Gelir",
                "secondGeneration": "İkinci Nesil",
                "thirdGeneration": "Üçüncü Nesil",
                "fourthGeneration": "Dördüncü Nesil",
                "fifthGeneration": "Beşinci Nesil",
                "totalNumberOfFriends": "Toplam Arkadaş Sayısı",
                "activeFriends": "Aktif Arkadaşlar"
            },
            "myTeam": {
                "title": "Takım Üye Listesi",
                "id": "ID",
                "generation": "Nesil",
                "registrationDate": "Kayıt Tarihi",
                "noResults": "Sonuç yok",
                "noMoreResults": "Daha fazla sonuç yok"
            },
            "invite": {
                "title": "Arkadaş Davet Et",
                "headline": "Film izleyerek gelir elde etmeye başlayın",
                "invitationLink": "Davet Bağlantısı",
                "invitationCode": "Davet Kodu"
            },
            "revenueMusic": {
                "title": "Müzik Üye Merkezi"
            },
            "revenue": {
                "title": "Üye Merkezi",
                "score": {
                    "title": "Puanlama Merkezi",
                    "type": "Tür",
                    "director": "Yönetmen",
                    "introduction": "Giriş",
                    "recommendations": "İlgili Öneriler",
                    "categories": {
                        "upcoming_movies": "Yaklaşan Film",
                        "popular_movies": "Popüler Film"
                    },
                    "watch": "İzle"
                },
                "specialPackage": "Özel Paketler",
                "currentlevel": "Güncel seviye",
                "todayEarning": "Bugünkü Kazanç",
                "cumulativeEarning": "Kümülatif Kazanç",
                "package": {
                    "view": "Görüntüleme",
                    "dailyPerView": "Günlük Görüntüleme",
                    "validTime": "Geçerlilik Süresi",
                    "perViewIncome": "Görüntüleme Başına Gelir",
                    "scoreBtn": "Gelir elde etmek için puanla",
                    "openSoon": "Yakında açılacak",
                    "stayTuned": "Takipte kalın",
                    "unlockNow": "Şimdi aç",
                    "expired": "Paket süresi doldu",
                    "expiresIn": "Süresi dolacak",
                    "totalReturn": "Toplam Getiri",
                    "dailyReturn": "Günlük Getiri"
                },
                "packageDetails": "Detaylar",
                "packageExplain": "Paket Detayları",
                "buy": {
                    "modal": {
                        "text": "Bu satın alma işlemini tamamlamak istediğinizden emin misiniz?"
                    }
                }
            },
            "record": {
                "title": "Kayıt",
                "viewRating": "Derecelendirmeyi Görüntüle",
                "viewEarnings": "Kazançları Görüntüle",
                "noMoreRecords": "Daha fazla kayıt yok"
            },
            "profile": {
                "ofcWeb": "Resmi web sitesi",
                "partner": "Eternova Films Lider mekanizması",
                "officalWebsite": "Resmi web sitesi bağlantısı",
                "instagramAccount": "Instagram Hesabı",
                "userKYC": "Kullanıcı KYC",
                "telegram": "Telegram",
                "scoreRecord": "Puan kayıtları",
                "loginPasswordTab": "Giriş Şifresi",
                "transactionPasswordTab": "İşlem Şifresi",
                "notification": "Bildirim",
                "switchLanguage": "Dil değiştir",
                "contactCustomerService": "Müşteri Hizmetleri ile iletişime geçin",
                "appDownload": "Uygulama indirme",
                "logOut": "Çıkış Yap",
                "rechargeAndWithdraw": "Yükleme ve Çekme",
                "unreleasedPoint": "Yayımlanmamış Puan",
                "memberPoint": "Üye Puanı",
                "details": {
                    "title": "Kişisel bilgiler",
                    "nickname": "Takma ad",
                    "enterNickname": "Takma adınızı girin",
                    "gender": "Cinsiyet",
                    "male": "erkek",
                    "female": "kadın",
                    "validation": {
                        "nickname": {
                            "required": "Takma ad gerekli"
                        },
                        "telegram": {
                            "invalid": "Geçersiz Telegram kullanıcı adı"
                        },
                        "whatsapp": {
                            "invalid": "Geçersiz WhatsApp numarası"
                        }
                    },
                    "updatedSuccess": "Profil başarıyla güncellendi"
                },
                "kyc": {
                    "title": "Doğrulandı",
                    "errorPassport1": "Lütfen pasaportun ön yüzünü yükleyin",
                    "errorPassport2": "Lütfen pasaportunuzu tutarken bir selfie yükleyin",
                    "errorID1": "Lütfen kimlik kartınızın ön yüzünü yükleyin",
                    "errorID2": "Lütfen kimlik kartınızın arka yüzünü yükleyin",
                    "errorID3": "Lütfen kimlik kartınızı tutarken bir selfie yükleyin",
                    "successMsg": "KYC başarıyla incelemeye gönderildi",
                    "errorMsg": "KYC gönderilemedi, lütfen tekrar deneyin",
                    "inputs": {
                        "nationality": {
                            "label": "Uyruk",
                            "placeholder": "Lütfen uyruğunuzu girin",
                            "validation": {
                                "required": "Uyruk gerekli"
                            }
                        },
                        "name": {
                            "label": "Ad",
                            "placeholder": "Lütfen adınızı girin",
                            "validation": {
                                "required": "Ad gerekli"
                            }
                        },
                        "documentNumber": {
                            "label": "Belge numarası",
                            "placeholder": "Lütfen kimlik numarasını girin",
                            "validation": {
                                "required": "Belge numarası gerekli"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "Belge türü gerekli"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "Belge Türleri",
                            "option1": "Kimlik kartı",
                            "option2": "Pasaport",
                            "idCard": "Kimlik kartı",
                            "passport": "Pasaport"
                        }
                    },
                    "uploadDocument": "Belge Yükleme",
                    "frontOfDocument": "Belgenin Ön Yüzü",
                    "backOfDocument": "Belgenin Arka Yüzü",
                    "selfieHoldingDocument": "Belgenizi Tutarken Çekilmiş Selfie",
                    "actionButton": "İncelemeye gönder",
                    "kycVerified": "Bilgileriniz incelenmiş ve doğrulanmıştır. Kişisel bilgileriniz anında silinmiştir. Profil tekrar aktif. İşbirliğiniz için teşekkür ederiz.",
                    "alreadySubmited": "Zaten gönderdiniz. Lütfen inceleme sürecinin tamamlanmasını bekleyin",
                    "underReview": "Doğrulama isteğiniz inceleniyor",
                    "verified": "KYC doğrulamanız tamamlandı. Belgeleriniz kabul edildi.",
                    "rejected": "KYC doğrulaması başarısız oldu. Lütfen belgelerinizi tekrar gönderin.",
                },
                "loginPassword": {
                    "title": "Giriş Şifresi",
                    "codeSent": "Doğrulama kodu başarıyla gönderildi",
                    "changedSuccess": "Şifre başarıyla değiştirildi",
                    "inputs": {
                        "email": {
                            "label": "E-posta adresi",
                            "placeholder": "E-posta"
                        },
                        "verifyCode": {
                            "label": "Doğrulama Kodu",
                            "placeholder": "Lütfen doğrulama kodunu girin",
                            "sendBtn": "Gönder",
                            "validation": {
                                "required": "Doğrulama kodu gerekli"
                            }
                        },
                        "newPassword": {
                            "label": "Yeni Şifre",
                            "placeholder": "6-20 alfasayısal karakter",
                            "validation": {
                                "required": "Yeni şifre gerekli",
                                "min": "Şifre en az 6 karakter olmalı",
                                "max": "Şifre 20 karakterden uzun olamaz"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Onaylamak için şifreyi tekrar girin",
                            "validation": {
                                "required": "Lütfen şifrenizi onaylayın",
                                "oneOf": "Şifreler eşleşmeli"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "Fon Şifresi",
                    "codeSent": "Doğrulama kodu başarıyla gönderildi",
                    "changedSuccess": "Fon şifresi başarıyla değiştirildi",
                    "changedSuccessBind": "Fon şifresi başarıyla bağlandı",
                    "inputs": {
                        "email": {
                            "label": "E-posta adresi",
                            "placeholder": "E-posta"
                        },
                        "verifyCode": {
                            "label": "Doğrulama Kodu",
                            "placeholder": "Lütfen doğrulama kodunu girin",
                            "sendBtn": "Gönder",
                            "validation": {
                                "required": "Doğrulama kodu gerekli"
                            }
                        },
                        "newPassword": {
                            "label": "Fon Şifresi",
                            "placeholder": "6 haneli kombinasyon",
                            "validation": {
                                "required": "Yeni fon şifresi gerekli",
                                "matches": "Fon şifresi tam olarak 6 haneli olmalı"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Onaylamak için şifreyi tekrar girin",
                            "validation": {
                                "required": "Lütfen şifrenizi onaylayın",
                                "oneOf": "Şifreler eşleşmeli"
                            }
                        }
                    },
                    "reminder": {
                        "title": "Önemli Hatırlatma",
                        "points": {
                            "point1": "Fon şifreniz işlemler, para çekme ve hesap güvenliği ayarları için kullanılır. Giriş şifresiyle aynı olmaması tavsiye edilir. Sonuç olarak, hesabınız çalınırsa, bu site sorumlu değildir.",
                            "point2": "Fon şifresini değiştirdikten sonra 48 saat içinde para çekemezsiniz"
                        }
                    }
                }
            },
            "wallet": {
                "title": "Yükleme ve Çekme",
                "totalAssets": "Toplam Varlıklar",
                "recharge": "Yükle",
                "withdraw": "Çek",
                "transfer": "Transfer",
                "assetDetails": "Varlık Detayları",
                "cancelWithdrawal": "Çekimi iptal et",
                "addresses": "Adres",
                "filters": {
                    "all": "Hepsi",
                    "recharge": "Yükleme",
                    "transfer": "Transfer",
                    "withdraw": "Çekim",
                    "levelPurchase": "Seviye Satın Alma",
                    "taskReward": "Görev Ödülü",
                    "teamCommission": "Takım Komisyonu",
                    "bonus": "Bonus",
                    "salary": "Maaş"
                },
                "timeRange": {
                    "title": "Zaman aralığını seçin"
                },
                "status": {
                    "completed": "Tamamlandı",
                    "rejected": "Reddedildi",
                    "processing": "İşleniyor",
                    "userCancel": "Kullanıcı tarafından iptal edildi",
                    "scheduled": "Planlandı",
                    "shouldArriveBy": "Şu tarihe kadar ulaşması bekleniyor",
                    "requiresAction": "Dikkat Gerektiriyor",
                    "requiresActionContact": "Para çekme işlemine devam etmek için lütfen KYC doğrulamasını tamamlayın."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "Çekimi iptal etmek istediğinizden emin misiniz?"
                    }
                }
            },
            "withdraw": {
                "title": "Varlık Çekme",
                "currentlyAvailableAssets": "Mevcut varlıklar",
                "selectCurrency": "Para Birimi Seçin",
                "mainnet": "Ana Ağ",
                "withdrawalAddress": "Çekim Adresi",
                "withdrawalAddressPL": "Lütfen çekim adresini girin",
                "withdrawalAmount": "Çekim Miktarı",
                "withdrawalAmountAllowed": "İzin verilen miktar",
                "withdrawalAmountEnter": "Miktarı girin",
                "all": "Hepsi",
                "fees": "Ücretler",
                "incomeTax": "Gelir Vergisi",
                "actualArrival": "Gerçek varış",
                "confirmWithdrawal": "Çekimi onayla",
                "withdrawalInstructions": "Çekim Talimatları",
                "withdrawalInstruction1": "Varış süresi: Çekim başvurusu 1-72 saat içinde tamamlanacaktır.",
                "withdrawalInstruction2": "Çekim aralığı: Her başarılı ulaşımdan sonra bir çekim başlatmak 24 saat sürer.",
                "withdrawalInstruction3": "Her çekim için 1 USDT işlem ücreti alınır.",
                "withdrawalInstruction4": "Vergi standardı",
                "withdrawalInstruction5": "1000 USDT ve üzeri: vergisiz",
                "withdrawalInstruction6": "İlk çekim alınmadan önce sonraki çekim başvuruları başlatılamaz.",
                "withdrawalInstruction7": "Minimum çekim miktarı: 15 USDT.",
                "validation": {
                    "address": {
                        "required": "Çekim adresi gerekli"
                    },
                    "amount": {
                        "required": "Lütfen çekim miktarını girin",
                        "invalid": "Lütfen çekim miktarını girin",
                        "min": "Minimum çekim miktarı 15 USDT'dir",
                        "max": "Maksimum çekim miktarı 50000 USDT'dir"
                    }
                }
            },
            "transfer": {
                "title": "Transfer",
                "transferSuccessfully": "Transfer başarıyla tamamlandı",
                "transferCurrency": "Transfer Para Birimi",
                "rechargeAndWithdraw": "Yükleme ve Çekme",
                "balance": "Bakiye",
                "memberPoint": "Üye Puanı",
                "transferAmount": "Transfer Miktarı",
                "all": "tümü",
                "confirmTransfer": "Transferi onayla",
                "enterAmount": "Lütfen transfer miktarını girin",
                "validation": {
                    "amount": {
                        "required": "Lütfen transfer miktarını girin",
                        "invalid": "Miktar gerekli",
                        "min": "Minimum transfer miktarı 1 USDT'dir"
                    }
                }
            },
            "recharge": {
                "title": "Varlık Yatırma",
                "selectCurrency": "Para Birimi Seçin",
                "selectNetwork": "Ağ Seçin",
                "mainnet": "Ana Ağ",
                "saveQRcode": "QR kodu kaydet",
                "depositAddress": "Yatırma Adresi",
                "note": "Not",
                "depositInstructions": "Yatırma Talimatları",
                "instructions": [
                    "Devam etmeden önce lütfen kripto para birimi türünüzün, ana ağınızın ve adres bilgilerinizin doğru olduğundan emin olun.",
                    "Minimum yatırma miktarı 8 USDT'dir; bu miktarın altındaki yatırımlar hesaba aktarılmaz.",
                    "Bu adrese USDT veya USDC dışında varlık yatırmayın, fonlar geri alınamaz.",
                    "Adresler periyodik olarak güncellendiği için fon güvenliğini sağlamak için her işlemden önce daima en güncel yatırma adresini alın."
                ]
            },
            "unreleased": {
                "title": "Yayımlanmamış Puan",
                "desc": "Yayımlanacak fonların açıklaması",
                "burn": "Yakma",
                "burnCause": "Arkadaşın kısmından daha düşük davet ödülleri yanmaya neden olur",
                "friendshipLevel": "Arkadaşlık Seviyesi",
                "release": "Yayınla",
                "releaseCondition": "Arkadaşların yayımlayabileceği miktara eşit veya daha yüksek",
                "info1": "Yayımlanacak fonlar, mevcut seviyenin takım arkadaşların seviyesinden düşük olması ve davet ödülünün yanması nedeniyle oluşur.",
                "info2": "Kullanıcı, takım arkadaşının seviyesine eşit veya daha yüksek bir seviyeye yükseldiğinde, yayımlanacak bu miktarı alabilir.",
                "toBeReleased": "Yayımlanacak kota"
            },
            "memberPoint": {
                "title": "Üye Puanı",
                "totalAssets": "Toplam Varlıklar",
                "assetDeposit": "Varlık Yatırma",
                "assetDetails": "Varlık Detayları"
            },
            "appDownload": {
                "title": "Uygulama indirme",
                "subtitle": "Daha iyi bir deneyim için uygulamayı indirin",
                "googlePlay": {
                    "label": "Google Play Store İndir"
                },
                "appStore": {
                    "label": "Apple Store İndir"
                },
                "note": "Not: İndirme ve yükleme işlemi sırasında, indirme hatası, yükleme paketini ayrıştırma hatası veya yükleme istisnası olursa, lütfen tekrar indirip kurun"
            },
            "login": {
                "accountLogin": "Hesap Girişi",
                "noAccountYet": "Henüz hesabınız yok mu?",
                "registerNow": "Şimdi kaydolun",
                "tabs": {
                    "username": "Kullanıcı Adı ile Giriş",
                    "email": "E-posta ile Giriş"
                },
                "inputs": {
                    "username": {
                        "placeholder": "Kullanıcı Adı",
                        "validation": {
                            "required": "Kullanıcı adı gerekli",
                            "min": "Kullanıcı adı en az 3 karakter olmalı"
                        }
                    },
                    "email": {
                        "placeholder": "E-posta",
                        "validation": {
                            "required": "E-posta gerekli",
                            "invalid": "Geçersiz e-posta formatı"
                        }
                    },
                    "password": {
                        "label": "Şifre",
                        "placeholder": "Şifre",
                        "validation": {
                            "required": "Şifre gerekli",
                            "min": "Şifre en az 6 karakter olmalı"
                        },
                        "show": "Şifreyi göster",
                        "hide": "Şifreyi gizle"
                    }
                },
                "links": {
                    "forgot": "Şifrenizi mi unuttunuz?",
                    "register": {
                        "text": "Hesabınız yok mu?",
                        "link": "Şimdi kaydolun"
                    }
                },
                "buttons": {
                    "login": "Giriş Yap"
                },
                "success": "Başarılı",
                "terms": {
                    "validation": {
                        "required": "Şartları ve koşulları kabul etmelisiniz"
                    }
                },
                "errors": {
                    "userNotFound": "Kullanıcı bulunamadı",
                    "wrongPassword": "Yanlış şifre"
                }
            },
            "register": {
                "title": "Kaydol",
                "accountRegistration": "Hesap Kaydı",
                "alreadyHaveAccount": "Zaten bir hesabınız var mı?",
                "loginNow": "Şimdi giriş yap",
                "inputs": {
                    "username": {
                        "placeholder": "Kullanıcı Adı",
                        "validation": {
                            "required": "Kullanıcı adı gerekli",
                            "min": "Kullanıcı adı en az 5 karakter olmalı",
                            "matches": "Kullanıcı adı bir harfle başlamalı, yalnızca harf, sayı, '_' veya '.' içerebilir ve özel bir karakter veya sayı ile başlayamaz veya bitemez."
                        }
                    },
                    "email": {
                        "placeholder": "E-posta Adresi",
                        "validation": {
                            "required": "E-posta gerekli",
                            "invalid": "Geçersiz e-posta formatı"
                        }
                    },
                    "phone": {
                        "placeholder": "Cep telefonu numarası",
                        "validation": {
                            "required": "Telefon numarası gerekli",
                            "digits": "Telefon numarası yalnızca rakam içermelidir"
                        }
                    },
                    "password": {
                        "placeholder": "Giriş Şifresi",
                        "validation": {
                            "required": "Şifre gerekli",
                            "min": "Şifre en az 6 karakter olmalı"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "Şifreyi Onayla",
                        "validation": {
                            "required": "Lütfen şifrenizi onaylayın",
                            "match": "Şifreler eşleşmeli"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "Davet Kodu",
                        "validation": {
                            "required": "Davet kodu gerekli"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "E-posta zaten kullanımda",
                    "usernameTaken": "Kullanıcı adı zaten kullanımda",
                    "invalidReferral": "Geçersiz referans kodu"
                },
                "buttons": {
                    "register": "Kaydol"
                },
                "terms": {
                    "validation": {
                        "required": "Şartları ve koşulları kabul etmelisiniz"
                    }
                },
                "links": {
                    "login": {
                        "text": "Zaten bir hesabınız var mı?",
                        "link": "Şimdi giriş yap"
                    }
                },
                "success": "Başarıyla kaydedildi",
                "countrySelector": {
                    "title": "Ülke Seç"
                }
            },
            "terms": {
                "part1": "Birleşik Krallık'ta bulunan bir hesapla devam ederek,",
                "part2": "Hizmet Şartlarımızı",
                "part3": "kabul etmiş olursunuz ve",
                "part4": "Gizlilik Politikamızı",
                "title": "Eternova Films Gizlilik Politikası"
            },
            "areaCode": {
                "label": "Alan kodunu seçin"
            },
            "forgetPassword": {
                "title": "Şifremi Unuttum",
                "inputs": {
                    "email": {
                        "label": "E-POSTA",
                        "placeholder": "E-postanız",
                        "validation": {
                            "required": "E-posta gerekli",
                            "invalid": "Geçersiz e-posta formatı"
                        }
                    },
                    "verificationCode": {
                        "label": "Doğrulama kodu",
                        "placeholder": "Lütfen doğrulama kodunu girin",
                        "validation": {
                            "required": "Doğrulama kodu gerekli"
                        },
                        "button": "Doğrulama Kodu Al"
                    },
                    "newPassword": {
                        "label": "Yeni Şifre",
                        "placeholder": "Lütfen yeni bir şifre girin",
                        "validation": {
                            "required": "Yeni şifre gerekli",
                            "min": "Şifre en az 6 karakter olmalı"
                        },
                        "show": "Şifreyi göster",
                        "hide": "Şifreyi gizle"
                    }
                },
                "buttons": {
                    "reset": "Sıfırla"
                },
                "alerts": {
                    "emailRequired": "Lütfen geçerli bir e-posta girin",
                    "codeSent": "Doğrulama kodu e-postanıza gönderildi",
                    "sendError": "Kod gönderme başarısız oldu",
                    "restSuccess": "Şifre başarıyla sıfırlandı. Lütfen giriş yapın.",
                    "emailNotFound": "E-posta bulunamadı",
                    "codeExpired": "Süresi dolmuş kod"
                }
            },
            "verifyFundsPassword": {
                "title": "Fon Şifresini Doğrula",
                "inputs": {
                    "fundsPassword": {
                        "label": "Fon Şifresi",
                        "placeholder": "Fon şifresini girin",
                        "validation": {
                            "required": "Fon şifresi gerekli",
                            "matches": "Fon şifresi tam olarak 6 haneli olmalı"
                        }
                    }
                },
                "buttons": {
                    "verify": "Doğrula"
                },
                "alerts": {
                    "noFundsPassword": "Lütfen işlem şifresini bağlayın",
                    "checkError": "Fon şifresi kontrol edilirken bir hata oluştu",
                    "purchaseSuccess": "Paket başarıyla satın alındı",
                    "withdrawalSuccess": "Para çekme talebi başarıyla oluşturuldu",
                    "insufficientBalance": "Yetersiz bakiye",
                    "transferToTask": "Lütfen bakiyenizi çekimden üye puanlarına transfer edin",
                    "invalidPurchase": "Geçersiz satın alma girişimi",
                    "incorrectPassword": "Yanlış fon şifresi",
                    "purchaseError": "Satın alma sırasında bir hata oluştu",
                    "wait48Hours": "Para çekme işlemi için fon şifresini değiştirdikten sonra 48 saat bekleyin",
                    "unauthorizedRequest": "Yetkisiz istek",
                    "generalError": "Bir hata oluştu, lütfen daha sonra tekrar deneyin",
                    "tooManyAttempts": "Çok fazla deneme yapıldı, lütfen daha sonra tekrar deneyin"
                }
            },
            "setFundsPassword": {
                "title": "Fon Şifresi Ayarla",
                "inputs": {
                    "fundsPassword": {
                        "label": "Fon Şifresi",
                        "placeholder": "Fon şifresini ayarla",
                        "validation": {
                            "required": "Fon şifresi gerekli",
                            "matches": "Fon şifresi tam olarak 6 haneli olmalı"
                        }
                    },
                    "confirmPassword": {
                        "label": "Fon Şifresini Onayla",
                        "placeholder": "Fon şifresini onayla",
                        "validation": {
                            "required": "Lütfen fon şifrenizi onaylayın",
                            "matches": "Şifreler eşleşmeli"
                        }
                    }
                },
                "buttons": {
                    "save": "Kaydet"
                },
                "alerts": {
                    "success": "Fon şifresi başarıyla ayarlandı",
                    "error": "Fon şifresi ayarlanırken bir hata oluştu"
                }
            },
            "lang": {
                "title": "Dil değiştir"
            },
            "reels": {
                "missionAreaLabel": "Görev Alanı",
                "errors": {
                    "selectValidPackage": "Lütfen VIP görevini seçin",
                    "dailyLimitReached": "Limit aşıldı",
                    "notPurchased": "Paket bulunamadı",
                    "packageExpired": "Paket süresi doldu",
                    "alreadyLiked": "Zaten izlendi"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "VIP Görev Alanı"
                    }
                }
            },
            "agentPromotion": {
                "title": "Acenta Tanıtım Sistemi",
                "teamSize": "Takım büyüklüğü",
                "nextStageTeamSize": "Sonraki aşama takım büyüklüğü",
                "nextStageGroupPromotionReward": "Sonraki aşama grup tanıtım ödülü",
                "taskList": "Görev Listesi",
                "firstGenInvite": "Birinci seviye üye davet et",
                "secondGenInvite": "İkinci seviye üye davet et",
                "thirdGenInvite": "Üçüncü seviye üye davet et",
                "lastWeekIncrease": "Geçen haftanın artışı",
                "thisWeekIncrease": "Bu haftanın artışı",
                "available": "Mevcut",
                "receiveBtn": "Al",
                "levels": {
                    "beginnerCreator": "Acemi Yaratıcı",
                    "skilledSpecialist": "Yetenekli Uzman",
                    "seniorSpecialist": "Kıdemli Uzman",
                    "supervisor": "Süpervizör",
                    "seniorSupervisor": "Kıdemli Süpervizör",
                    "regionalManager": "Bölge Müdürü",
                    "seniorManager": "Kıdemli Müdür"
                }
            },
            "addressList": {
                "title": "Adres Listesi",
                "addAddressBtn": "Adres Ekle",
                "bidingAddress": {
                    "title": "Adres bağlama",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "Yükleme Kanalı"
                        },
                        "mainnet": {
                            "label": "Ana ağ"
                        },
                        "address": {
                            "label": "Adres",
                            "placeholder": "Lütfen adresi girin",
                            "validation": {
                                "required": "Adres boş olamaz"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "Adres geçersiz, lütfen doğru {{currency}}-{{network}} adresini girin",
                        "singleAddressLimit": "Yalnızca 1 adres bağlanabilir, değiştirmeniz gerekiyorsa lütfen müşteri hizmetleriyle iletişime geçin",
                        "addressAlreadyExists": "Adres zaten mevcut, lütfen tekrar eklemeyin"
                    },
                    "successBound": "Adres başarıyla bağlandı"
                },
                "pleaseSelectAddress": "Lütfen bir adres seçin",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "Bu adres zaten kullanımda. Değiştirmeniz gerekiyorsa, lütfen müşteri hizmetleriyle iletişime geçin."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "Önemli Hatırlatma"
                },
                "content": {
                    "deleteAddress": {
                        "main": "Adresi silmeyi onayla"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "Beğenmeme izni yok",
                "subscribe": "Abone Ol",
                "subscribed": "Abone Olundu",
                "subscribing": "Abone olunuyor",
                "views": "görüntülenme",
                "explore": "Keşfet"
            },
            "shortsRevenue": {
                "title": "Kısa Videolar"
            },
            "telegram": {
                "title": "Resmi Telegram",
                "joinGroup": "Telegram Grubuna Katıl",
                "claimReward": "4 USDT Al",
                "inputs": {
                    "username": {
                        "label": "Telegram Kullanıcı Adı",
                        "placeholder": "Lütfen Telegram kullanıcı adınızı girin",
                        "validation": {
                            "required": "Telegram kullanıcı adı gerekli"
                        }
                    }
                },
                "rewardInstructions": "Grup Giriş Ödülü Talimatları",
                "rewardInstruction1": "Grup giriş ödülüne başvurmak için lütfen Telegram kullanıcı adınızı kullanın.",
                "rewardInstruction2": "Yalnızca yeni hesaplar ödülü almaya hak kazanır. Ödülü zaten almış hesaplar grup giriş ödülüne hak kazanamaz.",
                "rewardStatuses": {
                    "pendingReview": "Zaten başvurdunuz. Lütfen yöneticinin ödülü göndermesini bekleyin.",
                    "alreadyClaimed": "Ödül zaten alındı.",
                    "pendingReviewGr": "Grup giriş ödülü inceleniyor. Yönetici isteğinizi incelerken gruba katıldığınızdan emin olun.",
                    "notInGroup": "Girdiğiniz Telegram kullanıcı adı grupta değil. Lütfen tekrar başvurun. Gruba katıldığınızdan ve Telegram kullanıcı adınızın doğru olduğundan emin olun.",
                    "userNameUsed": "Telegram kullanıcı adı zaten kullanılıyor. Bunun yanlış olduğunu düşünüyorsanız müşteri hizmetleriyle iletişime geçin."
                }
            },
            "missionsCenter": {
                "title": "Görev Listesi",
                "direct": "Doğrudan Görev",
                "team": "Takım Görevi",
                "growth": "Büyüme Görevi",
                "progress": "İlerleme",
                "added": "Toplanacak sayı: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "Alındı",
                "isClaiming": "Alınıyor",
                "inProgress": "Devam ediyor",
                "claimReward": "Al",
                "addDirectActiveMembers": "Birinci neslinizden {{count}} üyeyi herhangi bir VIP paketine abone olmaya başarıyla davet edin ve {{reward}} USDT kazanın",
                "addTeamMembers": "İkinci ve üçüncü nesil abonelikleriniz VIP1 veya üstüne ulaştığında toplam {{count}} üye olduğunda {{reward}} USDT kazanın",
                "addGrowthMembers": "Toplam {{count}} aktif üye ekleyin",
                "rewardClaimed": "Ödül başarıyla alındı",
                "claimFailed": "Ödül alınamadı"
            }
        }
    },
    bg: {
        translation: {
            "global": {
                "copySuccess": "Копирано",
                "days": "Дни",
                "insufficientBalance": "Недостатъчен баланс",
                "wait48hrs": "Моля, изчакайте 48 часа след смяна на паролата за средства, за да изтеглите",
                "pleaseEnter": "Моля, въведете",
                "save": "Запази",
                "ok": "ОК",
                "error": {
                    "invalidCode": "Невалиден код за потвърждение",
                    "tryAgain": "Нещо се обърка, опитайте отново по-късно"
                },
                "saved": "Запазено",
                "day": "Ден",
                "change": "Промяна",
                "from": "От",
                "to": "До",
                "analyze": "Анализирай",
                "total": "Общо",
                "loading": "Зареждане",
                "free": "Безплатно",
                "ongoingWithdrawal": "Само едно теглене може да се обработва едновременно",
                "waitAfterSuccessWithdraw": "Последващи заявки за теглене могат да се правят 24 часа след завършване на предходното теглене",
                "waitAfterCanceledWithdraw": "Моля, изчакайте 24 часа след отмяна на теглене, преди да поискате друго",
                "todaysEarnings": "Днешни приходи",
                "cumulativeEarnings": "Кумулативни приходи",
                "myLevel": "Моето ниво",
                "upgrade": "Надграждане",
                "success": "успех",
                "stayTuned": "Очаквайте скоро",
                "months": {
                    "jan": "Яну",
                    "feb": "Фев",
                    "mar": "Мар",
                    "apr": "Апр",
                    "may": "Май",
                    "jun": "Юни",
                    "jul": "Юли",
                    "aug": "Авг",
                    "sep": "Сеп",
                    "oct": "Окт",
                    "nov": "Ное",
                    "dec": "Дек"
                },
                "people": "Хора",
                "views": "Преглеждания",
                "dontRepeat": "Моля, не повтаряйте заявката",
                "sending": "Изпращане",

                "cancel": "Отказ",
                "confirm": "Потвърди",
                "selectCategory": "Избери категория"

            },
            "common": {
                "errorOccurred": "Възникна грешка"
            },
            "bottomBar": {
                "home": "Начало",
                "team": "Екип",
                "revenue": "Приходи",
                "record": "Музика",
                "mine": "Моят профил"
            },
            "home": {
                "viral": "Късометражни видеа",
                "tredningNow": "Популярни филми",
                "seeMore": "Виж повече",
                "aboutUs": "за нас",
                "help": "помощ",
                "missionCenter": "център за мисии",
                "bonusDescription": "Описание на бонуса",
                "socialMedia": "Социални медии",
                "joinUs": "Присъединете се към официалната Telegram група на Eternova Films и получете 1 USDT като награда.",
                "leader": "Eternova Films City Partner",
                "home": "Начало",
                "forYou": "За вас",
                "inviteFriends": "Покани приятели",
                "inviteFriendsText": "Поканете приятели, за да печелите доходи",
                "annoucments": [
                    "Добре дошли в Eternova Films! Създавайте, споделяйте и печелете от вашите късометражни видеа."
                ]
            },
            "about": {
                "title": "За компанията"
            },
            "notices": {
                "title": "Известия",
                "translation": {
                    "eternovafilms_open": {
                        "title": "Добре дошли в Eternova Films",
                        "content": "Радваме се, че се присъединявате към нашата общност. Eternova Films е повече от просто платформа – това е сцена, където киното, музиката и креативността блестят заедно. Тук ще откриете завладяващи истории, незабравими изпълнения и възможности да се развивате заедно с глобална аудитория от мечтатели и творци. Независимо дали сте тук, за да се наслаждавате на филми, да изследвате музика или да участвате в нови начинания, вашето пътешествие започва сега. Благодарим ви, че стъпвате в този свят с нас – заедно ние изграждаме нещо вечно. Присъединете се към официалната Telegram група и вземете своята награда от 1 USDT още днес!"
                    }
                }
            },
            "help": {
                "title": "Помощен център",
                "translation": {
                    "how_to_recharge": {
                        "title": "Как да заредите",
                        "content": "Отворете 'Моят профил' в долната лента. Отидете на 'Зареждане и теглене' → 'Зареждане'. Изберете вашата валута и основна мрежа, след което копирайте адреса за депозит."
                    },
                    "how_to_do_task_movie": {
                        "title": "Как да изпълните задача с филм",
                        "content": "Отворете 'Приходи'. Намерете своя пакет, докоснете 'Точки', за да съберете доход, изберете видео, след това го харесайте."
                    },
                    "how_to_do_task_music": {
                        "title": "Как да изпълните задача с музика",
                        "content": "Отворете 'Музика'. Намерете своя пакет, докоснете 'Точки', за да съберете доход, изберете видео, след това го харесайте."
                    },
                    "how_to_withdraw": {
                        "title": "Как да изтеглите",
                        "content": "Отворете 'Моят профил' → 'Зареждане и теглене' → 'Теглене'. Изберете валута и основна мрежа, изберете запазен адрес, въведете сумата, докоснете 'Потвърди тегленето', след това потвърдете с вашата парола за средства."
                    },
                    "how_to_invite_friends": {
                        "title": "Как да поканите приятели",
                        "content": "Отидете на 'Екип' → 'Покани приятел'. Докоснете 'Копирай', за да копирате своя код за покана."
                    },
                    "how_to_register": {
                        "title": "Как да се регистрирате",
                        "content": "На страницата за регистрация: въведете потребителско име и имейл, изберете кода на държавата на телефона, въведете телефонния си номер, създайте и потвърдете парола, добавете кода за покана, след което докоснете стрелката 'Регистрирай се'."
                    },
                    "how_to_purchase_package_long": {
                        "title": "Как да закупите пакет (Раздел Дълги видеа)",
                        "content": "Отворете 'VIP', изберете пакет, след това докоснете 'Отключи сега'."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "Как да закупите пакет (Раздел Късометражни видеа)",
                        "content": "Отворете 'Късометражни видеа', изберете пакет, след това докоснете 'Отключи сега'."
                    },
                    "how_to_transfer_funds": {
                        "title": "Как да прехвърлите средства от Зареждане и теглене към Членски точки",
                        "content": "Отворете 'Моят профил' → 'Зареждане и теглене'. Докоснете иконата за прехвърляне (горе вдясно), изберете валутата, въведете сумата, след което докоснете 'Потвърди прехвърлянето'."
                    },
                    "how_to_reset_password": {
                        "title": "Как да нулирате парола",
                        "content": "На екрана за вход, докоснете 'Забравена парола'. Въведете имейла си, докоснете 'Вземи код за потвърждение', въведете кода от имейла си, задайте нова парола, след това докоснете 'ОК'."
                    },
                    "how_to_change_password": {
                        "title": "Как да смените парола",
                        "content": "Отворете 'Моят профил' → 'Парола за вход'. Въведете имейла си, докоснете 'Вземи код за потвърждение', въведете кода, задайте и потвърдете новата си парола, след което докоснете 'ОК'."
                    },
                    "how_to_set_funding_password": {
                        "title": "Как да зададете парола за средства",
                        "content": "Отворете 'Моят профил' → 'Парола за транзакция'. Въведете имейла си, докоснете 'Вземи код за потвърждение', въведете кода, задайте и потвърдете вашата парола за средства, след което докоснете 'ОК'."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "Как да обвържете адрес за теглене",
                        "content": "Отворете 'Моят профил' → 'Зареждане и теглене'. Отворете списъка с адреси → 'Добавяне на адрес'. Изберете канал и основна мрежа, въведете своя адрес за теглене, потвърдете чрез имейл код, след това докоснете 'ОК'."
                    },
                    "how_to_protect_my_account": {
                        "title": "Как да защитя акаунта си",
                        "content": "Отворете 'Моят профил' → 'User KYC'. Въведете националност и истинско име, изберете тип документ, попълнете номера на документа, качете документи, след което докоснете 'Изпрати за преглед'."
                    }
                }
            },
            "helpDetails": {
                "title": "Урок"
            },
            "introduction": {
                "title": "Обяснение на приходите"
            },
            "social": {
                "title": "Социални медии на Eternova Films",
                "offical": "Социални медии",
                "officalTGChannel": "Официален Telegram канал",
                "officalTGGroup": "Официална Telegram група",
                "subscribers": "абонати",
                "join": "Присъедини се",
                "officalIG": "Официален Instagram профил",
                "follow": "Последвай",
                "followers": "последователи",
                "community": "Общност",
                "members": "членове",
                "new": "Ново",
                "errorRegion": "Моля, закупете пакет, за да получите достъп до тази група."
            },
            "notification": {
                "title": "Известие",
                "types": {
                    "eventNotification": "Известие за събитие",
                    "walletMessage": "Съобщение от портфейла",
                    "systemNotification": "Системно известие"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "Заявление за теглене",
                        "message": "Подали сте заявление за теглене на USDT, моля, изчакайте одобрение, номер на поръчка: {{order_number}}, сума: {{amount}}, такса за обработка: {{fee}}USDT"
                    },
                    "withdrawal_approve": {
                        "title": "Тегленето е завършено",
                        "message": "Вашето теглене е завършено, номер на поръчка: {{order_number}}, сума: {{amount}}, такса за обработка: {{fee}}USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC изпратен",
                        "message": "Вашият KYC е изпратен за преглед"
                    },
                    "kyc_approved": {
                        "title": "KYC одобрен",
                        "message": "Вашият KYC е одобрен"
                    },
                    "kyc_rejected": {
                        "title": "KYC отхвърлен",
                        "message": "Вашият KYC е отхвърлен"
                    }
                }
            },
            "notificationDetails": {
                "title": "Известие"
            },
            "team": {
                "title": "Екип",
                "benefitAnalysis": "Анализ на ползите",
                "investmentIncome": "Доход от инвестиция",
                "teamMemberListBtn": "Списък на членовете на екипа",
                "inviteFriend": "Покани приятел",
                "inviteFriendInfo": "Гледайте филми, за да започнете да печелите доходи",
                "totalIncome": "Общ доход на потребителя",
                "todayIncome": "Днешен доход",
                "todayInc": "Днес",
                "teamTotal": "Обща сума на абонаментите за екипа",
                "likesIncome": "Доход от харесвания",
                "teamIncome": "Доход на екипа",
                "totalReturn": "Обща възвращаемост",
                "totalTeamMembers": "Общо членове на екипа",
                "addedToday": "Добавени днес",
                "firstGeneration": "Първо поколение",
                "totalMembers": "Общо членове",
                "totalActiveMembers": "Активни",
                "genTotalIncome": "Общ доход",
                "secondGeneration": "Второ поколение",
                "thirdGeneration": "Трето поколение",
                "fourthGeneration": "Четвърто поколение",
                "fifthGeneration": "Пето поколение",
                "totalNumberOfFriends": "Общ брой приятели",
                "activeFriends": "Активни приятели"
            },
            "myTeam": {
                "title": "Списък на членовете на екипа",
                "id": "Идентификационен номер",
                "generation": "Поколение",
                "registrationDate": "Дата на регистрация",
                "noResults": "Няма резултати",
                "noMoreResults": "Няма повече резултати"
            },
            "invite": {
                "title": "Покани приятел",
                "headline": "Гледайте филми, за да започнете да печелите доходи",
                "invitationLink": "Линк за покана",
                "invitationCode": "Код за покана"
            },
            "revenueMusic": {
                "title": "Център за музикални членове"
            },
            "revenue": {
                "title": "Членски център",
                "score": {
                    "title": "Център за оценяване",
                    "type": "Тип",
                    "director": "Режисьор",
                    "introduction": "Въведение",
                    "recommendations": "Свързани препоръки",
                    "categories": {
                        "upcoming_movies": "Предстоящ филм",
                        "popular_movies": "Популярен филм"
                    },
                    "watch": "Гледай"
                },
                "specialPackage": "Специални пакети",
                "currentlevel": "Текущо ниво",
                "todayEarning": "Днешен доход",
                "cumulativeEarning": "Кумулативен доход",
                "package": {
                    "view": "Преглед",
                    "dailyPerView": "Ежедневни прегледи",
                    "validTime": "Срок на валидност",
                    "perViewIncome": "Доход от преглед",
                    "scoreBtn": "Оцени, за да получиш доход",
                    "openSoon": "Отваря се скоро",
                    "stayTuned": "Очаквайте скоро",
                    "unlockNow": "Отключи сега",
                    "expired": "Пакетът е изтекъл",
                    "expiresIn": "Изтича след",
                    "totalReturn": "Обща възвращаемост",
                    "dailyReturn": "Ежедневна възвращаемост"
                },
                "packageDetails": "Детайли",
                "packageExplain": "Детайли на пакетите",
                "buy": {
                    "modal": {
                        "text": "Моля, потвърдете, че искате да завършите тази покупка"
                    }
                }
            },
            "record": {
                "title": "Запис",
                "viewRating": "Преглед на оценката",
                "viewEarnings": "Преглед на приходите",
                "noMoreRecords": "Няма повече записи"
            },
            "profile": {
                "ofcWeb": "Официален уебсайт",
                "partner": "Механизъм за лидер на Eternova Films",
                "officalWebsite": "Линк към официалния уебсайт",
                "instagramAccount": "Instagram профил",
                "userKYC": "Потребителски KYC",
                "telegram": "Telegram",
                "scoreRecord": "Запис на оценки",
                "loginPasswordTab": "Парола за вход",
                "transactionPasswordTab": "Парола за транзакция",
                "notification": "Известие",
                "switchLanguage": "Смяна на езика",
                "contactCustomerService": "Свържете се с обслужване на клиенти",
                "appDownload": "Изтегляне на приложението",
                "logOut": "Изход",
                "rechargeAndWithdraw": "Зареждане и теглене",
                "unreleasedPoint": "Неиздадени точки",
                "memberPoint": "Членски точки",
                "details": {
                    "title": "Лична информация",
                    "nickname": "Псевдоним",
                    "enterNickname": "Въведете вашия псевдоним",
                    "gender": "Пол",
                    "male": "мъж",
                    "female": "жена",
                    "validation": {
                        "nickname": {
                            "required": "Псевдонимът е задължителен"
                        },
                        "telegram": {
                            "invalid": "Невалидно потребителско име в Telegram"
                        },
                        "whatsapp": {
                            "invalid": "Невалиден номер на WhatsApp"
                        }
                    },
                    "updatedSuccess": "Профилът е актуализиран успешно"
                },
                "kyc": {
                    "title": "Проверен",
                    "errorPassport1": "Моля, качете предната снимка на паспорта",
                    "errorPassport2": "Моля, качете селфи, на което държите паспорта си",
                    "errorID1": "Моля, качете предната снимка на личната си карта",
                    "errorID2": "Моля, качете задната снимка на личната си карта",
                    "errorID3": "Моля, качете селфи, на което държите личната си карта",
                    "successMsg": "KYC е изпратен успешно за преглед",
                    "errorMsg": "Неуспешно изпращане на KYC, моля, опитайте отново",
                    "inputs": {
                        "nationality": {
                            "label": "Националност",
                            "placeholder": "Моля, въведете националност",
                            "validation": {
                                "required": "Националността е задължителна"
                            }
                        },
                        "name": {
                            "label": "Име",
                            "placeholder": "Моля, въведете вашето име",
                            "validation": {
                                "required": "Името е задължително"
                            }
                        },
                        "documentNumber": {
                            "label": "Номер на документа",
                            "placeholder": "Моля, въведете номера на личната карта",
                            "validation": {
                                "required": "Номерът на документа е задължителен"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "Типът на документа е задължителен"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "Типове документи",
                            "option1": "Лична карта",
                            "option2": "Паспорт",
                            "idCard": "Лична карта",
                            "passport": "Паспорт"
                        }
                    },
                    "uploadDocument": "Качване на документ",
                    "frontOfDocument": "Предна страна на документа",
                    "backOfDocument": "Задна страна на документа",
                    "selfieHoldingDocument": "Селфи с документ в ръка",
                    "actionButton": "Изпрати за преглед",
                    "kycVerified": "Вашата информация беше прегледана и проверена. Личните ви данни бяха незабавно изтрити. Профилът е отново активен. Благодарим ви за съдействието.",
                    "alreadySubmited": "Вече сте изпратили. Моля, изчакайте процесът на преглед да приключи",
                    "underReview": "Вашата заявка за проверка се преглежда",
                    "verified": "Вашата KYC проверка е завършена. Вашите документи са приети.",
                    "rejected": "KYC проверката не успя. Моля, изпратете документите си отново.",
                },
                "loginPassword": {
                    "title": "Парола за вход",
                    "codeSent": "Кодът за потвърждение е изпратен успешно",
                    "changedSuccess": "Паролата е сменена успешно",
                    "inputs": {
                        "email": {
                            "label": "Имейл адрес",
                            "placeholder": "Имейл"
                        },
                        "verifyCode": {
                            "label": "Код за потвърждение",
                            "placeholder": "Моля, въведете кода за потвърждение",
                            "sendBtn": "Изпрати",
                            "validation": {
                                "required": "Кодът за потвърждение е задължителен"
                            }
                        },
                        "newPassword": {
                            "label": "Нова парола",
                            "placeholder": "6-20 буквено-цифрови символи",
                            "validation": {
                                "required": "Новата парола е задължителна",
                                "min": "Паролата трябва да е поне 6 символа",
                                "max": "Паролата не може да бъде по-дълга от 20 символа"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Въведете паролата отново, за да потвърдите",
                            "validation": {
                                "required": "Моля, потвърдете паролата си",
                                "oneOf": "Паролите трябва да съвпадат"
                            }
                        }
                    }
                }
            },
            "fundsPassword": {
                "title": "Парола за средства",
                "codeSent": "Кодът за потвърждение е изпратен успешно",
                "changedSuccess": "Паролата за средства е сменена успешно",
                "changedSuccessBind": "Паролата за средства е обвързана успешно",
                "inputs": {
                    "email": {
                        "label": "Имейл адрес",
                        "placeholder": "Имейл"
                    },
                    "verifyCode": {
                        "label": "Код за потвърждение",
                        "placeholder": "Моля, въведете кода за потвърждение",
                        "sendBtn": "Изпрати",
                        "validation": {
                            "required": "Кодът за потвърждение е задължителен"
                        }
                    },
                    "newPassword": {
                        "label": "Парола за средства",
                        "placeholder": "6-цифрена комбинация",
                        "validation": {
                            "required": "Новата парола за средства е задължителна",
                            "matches": "Паролата за средства трябва да бъде точно 6 цифри"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "Въведете паролата отново, за да потвърдите",
                        "validation": {
                            "required": "Моля, потвърдете паролата си",
                            "oneOf": "Паролите трябва да съвпадат"
                        }
                    }
                },
                "reminder": {
                    "title": "Любезно напомняне",
                    "points": {
                        "point1": "Вашата парола за средства се използва за транзакции, тегления и настройки за сигурност на акаунта. Препоръчително е да не съвпада с паролата за вход. В резултат на това, ако акаунтът бъде откраднат, този сайт не носи отговорност.",
                        "point2": "След смяна на паролата за средства, не можете да теглите пари в рамките на 48 часа"
                    }
                }
            },
            "wallet": {
                "title": "Зареждане и теглене",
                "totalAssets": "Общи активи",
                "recharge": "Зареждане",
                "withdraw": "Теглене",
                "transfer": "Прехвърляне",
                "assetDetails": "Детайли на активите",
                "cancelWithdrawal": "Отказ на теглене",
                "addresses": "Адрес",
                "filters": {
                    "all": "Всички",
                    "recharge": "Зареждане",
                    "transfer": "Прехвърляне",
                    "withdraw": "Теглене",
                    "levelPurchase": "Покупка на ниво",
                    "taskReward": "Награда от задача",
                    "teamCommission": "Комисиона от екип",
                    "bonus": "Бонус",
                    "salary": "Заплата"
                },
                "timeRange": {
                    "title": "Изберете времеви диапазон"
                },
                "status": {
                    "completed": "Завършено",
                    "rejected": "Отхвърлено",
                    "processing": "Обработване",
                    "userCancel": "Отменено от потребителя",
                    "scheduled": "Планирано",
                    "shouldArriveBy": "Трябва да пристигне до",
                    "requiresAction": "Изисква се действие",
                    "requiresActionContact": "Моля, завършете KYC проверката, за да продължите с тегленето."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "Сигурни ли сте, че искате да отмените тегленето"
                    }
                }
            },
            "withdraw": {
                "title": "Теглене на активи",
                "currentlyAvailableAssets": "Налични активи в момента",
                "selectCurrency": "Изберете валута",
                "mainnet": "Основна мрежа",
                "withdrawalAddress": "Адрес за теглене",
                "withdrawalAddressPL": "Моля, въведете адреса за теглене",
                "withdrawalAmount": "Сума за теглене",
                "withdrawalAmountAllowed": "Разрешена сума между",
                "withdrawalAmountEnter": "Въведете сума",
                "all": "Всички",
                "fees": "Такси",
                "incomeTax": "Данък върху дохода",
                "actualArrival": "Действително пристигане",
                "confirmWithdrawal": "Потвърдете тегленето",
                "withdrawalInstructions": "Инструкции за теглене",
                "withdrawalInstruction1": "Време за пристигане: Заявлението за теглене ще бъде завършено в рамките на 1-72 часа.",
                "withdrawalInstruction2": "Интервал на теглене: Необходими са 24 часа след всяко успешно пристигане, за да се инициира теглене.",
                "withdrawalInstruction3": "За всяко теглене се начислява такса за обработка от 1 USDT.",
                "withdrawalInstruction4": "Данъчен стандарт",
                "withdrawalInstruction5": "1000 USDT и повече: без данък",
                "withdrawalInstruction6": "Последващи заявления за теглене не могат да бъдат инициирани, преди да бъде получено първото теглене.",
                "withdrawalInstruction7": "Минимална сума за теглене: 15 USDT.",
                "validation": {
                    "address": {
                        "required": "Адресът за теглене е задължителен"
                    },
                    "amount": {
                        "required": "Моля, въведете сумата за теглене",
                        "invalid": "Моля, въведете сумата за теглене",
                        "min": "Минималната сума за теглене е 15 USDT",
                        "max": "Максималната сума за теглене е 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "Прехвърляне",
                "transferSuccessfully": "Прехвърлено успешно",
                "transferCurrency": "Валута за прехвърляне",
                "rechargeAndWithdraw": "Зареждане и теглене",
                "balance": "Баланс",
                "memberPoint": "Членски точки",
                "transferAmount": "Сума за прехвърляне",
                "all": "всички",
                "confirmTransfer": "Потвърди прехвърлянето",
                "enterAmount": "Моля, въведете сумата за прехвърляне",
                "validation": {
                    "amount": {
                        "required": "Моля, въведете сумата за прехвърляне",
                        "invalid": "Сумата е задължителна",
                        "min": "Минималната сума за прехвърляне е 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "Депозит на активи",
                "selectCurrency": "Изберете валута",
                "selectNetwork": "Изберете мрежа",
                "mainnet": "Основна мрежа",
                "saveQRcode": "Запази QR кода",
                "depositAddress": "Адрес за депозит",
                "note": "Бележка",
                "depositInstructions": "Инструкции за депозит",
                "instructions": [
                    "Преди да продължите, моля, уверете се, че вашият тип криптовалута, основна мрежа и информация за адреса са точни.",
                    "Минималната сума за депозит е 8 USDT; депозити под тази сума няма да бъдат кредитирани.",
                    "Не депозирайте активи, различни от USDT или USDC, на този адрес, тъй като средствата не могат да бъдат възстановени.",
                    "Винаги получавайте най-новия адрес за депозит преди всяка транзакция, за да гарантирате сигурността на средствата, тъй като адресите се актуализират периодично."
                ]
            },
            "unreleased": {
                "title": "Неиздадени точки",
                "desc": "Описание на средствата, които ще бъдат издадени",
                "burn": "Изгаряне",
                "burnCause": "Наградите от покани, по-ниски от частта на приятеля, ще доведат до изгаряне",
                "friendshipLevel": "Ниво на приятелство",
                "release": "Издаване",
                "releaseCondition": "Равно или по-високо от сумата, която може да бъде издадена от приятели",
                "info1": "Средствата, които ще бъдат издадени, се дължат на това, че текущото ниво е по-ниско от нивото на приятелите в екипа, и наградата от поканата е изгорена.",
                "info2": "Когато потребителят се надгради до ниво, равно или по-високо от нивото на приятеля в екипа, той може да получи тази част от сумата, която ще бъде издадена.",
                "toBeReleased": "Квота за издаване"
            },
            "memberPoint": {
                "title": "Членски точки",
                "totalAssets": "Общи активи",
                "assetDeposit": "Депозит на активи",
                "assetDetails": "Детайли на активите"
            },
            "appDownload": {
                "title": "Изтегляне на приложението",
                "subtitle": "Изтеглете приложението за по-добро изживяване",
                "googlePlay": {
                    "label": "Изтегляне от Google Play Store"
                },
                "appStore": {
                    "label": "Изтегляне от Apple Store"
                },
                "note": "Забележка: По време на процеса на изтегляне и инсталиране, ако има неуспешно изтегляне, неуспешно анализиране на инсталационния пакет или изключение при инсталацията, моля, изтеглете и инсталирайте отново"
            },
            "login": {
                "accountLogin": "Вход в акаунт",
                "noAccountYet": "Все още нямате акаунт?",
                "registerNow": "Регистрирайте се сега",
                "tabs": {
                    "username": "Вход с потребителско име",
                    "email": "Вход с имейл"
                },
                "inputs": {
                    "username": {
                        "placeholder": "Потребителско име",
                        "validation": {
                            "required": "Потребителското име е задължително",
                            "min": "Потребителското име трябва да бъде поне 3 символа"
                        }
                    },
                    "email": {
                        "placeholder": "Имейл",
                        "validation": {
                            "required": "Имейлът е задължителен",
                            "invalid": "Невалиден формат на имейл"
                        }
                    },
                    "password": {
                        "label": "Парола",
                        "placeholder": "Парола",
                        "validation": {
                            "required": "Паролата е задължителна",
                            "min": "Паролата трябва да бъде поне 6 символа"
                        },
                        "show": "Покажи парола",
                        "hide": "Скрий парола"
                    }
                },
                "links": {
                    "forgot": "Забравена парола?",
                    "register": {
                        "text": "Нямате акаунт?",
                        "link": "Регистрирайте се сега"
                    }
                },
                "buttons": {
                    "login": "Вход"
                },
                "success": "Успешно",
                "terms": {
                    "validation": {
                        "required": "Трябва да приемете общите условия"
                    }
                },
                "errors": {
                    "userNotFound": "Потребителят не е намерен",
                    "wrongPassword": "Неправилна парола"
                }
            },
            "register": {
                "title": "Регистрация",
                "accountRegistration": "Регистрация на акаунт",
                "alreadyHaveAccount": "Вече имате акаунт?",
                "loginNow": "Влезте сега",
                "inputs": {
                    "username": {
                        "placeholder": "Потребителско име",
                        "validation": {
                            "required": "Потребителското име е задължително",
                            "min": "Потребителското име трябва да бъде поне 5 символа",
                            "matches": "Потребителското име трябва да започва с буква, може да съдържа само букви, цифри, '_' или '.', и не може да започва или завършва със специален символ или цифра."
                        }
                    },
                    "email": {
                        "placeholder": "Имейл адрес",
                        "validation": {
                            "required": "Имейлът е задължителен",
                            "invalid": "Невалиден формат на имейл"
                        }
                    },
                    "phone": {
                        "placeholder": "Номер на мобилен телефон",
                        "validation": {
                            "required": "Телефонният номер е задължителен",
                            "digits": "Телефонният номер трябва да съдържа само цифри"
                        }
                    },
                    "password": {
                        "placeholder": "Парола за вход",
                        "validation": {
                            "required": "Паролата е задължителна",
                            "min": "Паролата трябва да бъде поне 6 символа"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "Потвърди парола",
                        "validation": {
                            "required": "Моля, потвърдете паролата си",
                            "match": "Паролите трябва да съвпадат"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "Код за покана",
                        "validation": {
                            "required": "Кодът за покана е задължителен"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "Имейлът вече се използва",
                    "usernameTaken": "Потребителското име вече се използва",
                    "invalidReferral": "Невалиден код за препоръка"
                },
                "buttons": {
                    "register": "Регистрирай се"
                },
                "terms": {
                    "validation": {
                        "required": "Трябва да приемете общите условия"
                    }
                },
                "links": {
                    "login": {
                        "text": "Вече имате акаунт?",
                        "link": "Влезте сега"
                    }
                },
                "success": "Успешна регистрация",
                "countrySelector": {
                    "title": "Избери държава"
                }
            },
            "terms": {
                "part1": "Продължавайки с акаунт, намиращ се в Обединено кралство, вие се съгласявате с нашите",
                "part2": "Общи условия",
                "part3": "и потвърждавате, че сте прочели нашата",
                "part4": "Политика за поверителност.",
                "title": "Политика за поверителност на Eternova Films"
            },
            "areaCode": {
                "label": "Изберете код на област"
            },
            "forgetPassword": {
                "title": "Забравена парола",
                "inputs": {
                    "email": {
                        "label": "ИМЕЙЛ",
                        "placeholder": "Вашият имейл",
                        "validation": {
                            "required": "Имейлът е задължителен",
                            "invalid": "Невалиден формат на имейл"
                        }
                    },
                    "verificationCode": {
                        "label": "Код за потвърждение",
                        "placeholder": "Моля, въведете кода за потвърждение",
                        "validation": {
                            "required": "Кодът за потвърждение е задължителен"
                        },
                        "button": "Изпрати код за потвърждение"
                    },
                    "newPassword": {
                        "label": "Нова парола",
                        "placeholder": "Моля, въведете нова парола",
                        "validation": {
                            "required": "Новата парола е задължителна",
                            "min": "Паролата трябва да бъде поне 6 символа"
                        },
                        "show": "Покажи парола",
                        "hide": "Скрий парола"
                    }
                },
                "buttons": {
                    "reset": "Нулиране"
                },
                "alerts": {
                    "emailRequired": "Моля, въведете валиден имейл",
                    "codeSent": "Код за потвърждение е изпратен на вашия имейл",
                    "sendError": "Неуспешно изпращане на код",
                    "restSuccess": "Паролата е нулирана успешно. Моля, влезте.",
                    "emailNotFound": "Имейлът не е намерен",
                    "codeExpired": "Кодът е изтекъл"
                }
            },
            "verifyFundsPassword": {
                "title": "Потвърди парола за средства",
                "inputs": {
                    "fundsPassword": {
                        "label": "Парола за средства",
                        "placeholder": "Въведете парола за средства",
                        "validation": {
                            "required": "Паролата за средства е задължителна",
                            "matches": "Паролата за средства трябва да бъде точно 6 цифри"
                        }
                    }
                },
                "buttons": {
                    "verify": "Потвърди"
                },
                "alerts": {
                    "noFundsPassword": "Моля, обвържете паролата за транзакция",
                    "checkError": "Възникна грешка при проверка на паролата за средства",
                    "purchaseSuccess": "Пакетът е закупен успешно",
                    "withdrawalSuccess": "Заявката за теглене е изпратена успешно",
                    "insufficientBalance": "Недостатъчен баланс",
                    "transferToTask": "Моля, прехвърлете баланса си от теглене към членски точки",
                    "invalidPurchase": "Невалидно иницииране на покупка",
                    "incorrectPassword": "Неправилна парола за средства",
                    "purchaseError": "Възникна грешка по време на покупката",
                    "wait48Hours": "Моля, изчакайте 48 часа след смяна на паролата за средства, за да изтеглите",
                    "unauthorizedRequest": "Неразрешена заявка",
                    "generalError": "Възникна грешка, моля, опитайте отново по-късно",
                    "tooManyAttempts": "Твърде много опити, моля, опитайте отново по-късно"
                }
            },
            "setFundsPassword": {
                "title": "Задаване на парола за средства",
                "inputs": {
                    "fundsPassword": {
                        "label": "Парола за средства",
                        "placeholder": "Задайте парола за средства",
                        "validation": {
                            "required": "Паролата за средства е задължителна",
                            "matches": "Паролата за средства трябва да бъде точно 6 цифри"
                        }
                    },
                    "confirmPassword": {
                        "label": "Потвърди парола за средства",
                        "placeholder": "Потвърди парола за средства",
                        "validation": {
                            "required": "Моля, потвърдете паролата си за средства",
                            "matches": "Паролите трябва да съвпадат"
                        }
                    }
                },
                "buttons": {
                    "save": "Запази"
                },
                "alerts": {
                    "success": "Паролата за средства е зададена успешно",
                    "error": "Възникна грешка при задаването на паролата за средства"
                }
            },
            "lang": {
                "title": "Смяна на езика"
            },
            "reels": {
                "missionAreaLabel": "Област на мисията",
                "errors": {
                    "selectValidPackage": "Моля, изберете VIP мисия",
                    "dailyLimitReached": "Лимитът е достигнат",
                    "notPurchased": "Не е намерен пакет",
                    "packageExpired": "Пакетът е изтекъл",
                    "alreadyLiked": "Вече е гледано"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "VIP област на мисията"
                    }
                }
            },
            "agentPromotion": {
                "title": "Система за промоция на агенти",
                "teamSize": "Размер на екипа",
                "nextStageTeamSize": "Размер на екипа за следващ етап",
                "nextStageGroupPromotionReward": "Награда за промоция на група за следващ етап",
                "taskList": "Списък със задачи",
                "firstGenInvite": "Покани член от първо ниво",
                "secondGenInvite": "Покани член от второ ниво",
                "thirdGenInvite": "Покани член от трето ниво",
                "lastWeekIncrease": "Увеличение за миналата седмица",
                "thisWeekIncrease": "Увеличение за тази седмица",
                "available": "Налично",
                "receiveBtn": "Получи",
                "levels": {
                    "beginnerCreator": "Начинаещ творец",
                    "skilledSpecialist": "Квалифициран специалист",
                    "seniorSpecialist": "Старши специалист",
                    "supervisor": "Надзорник",
                    "seniorSupervisor": "Старши надзорник",
                    "regionalManager": "Регионален мениджър",
                    "seniorManager": "Старши мениджър"
                }
            },
            "addressList": {
                "title": "Списък с адреси",
                "addAddressBtn": "Добави адрес",
                "bidingAddress": {
                    "title": "Обвързване на адрес",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "Канал за зареждане"
                        },
                        "mainnet": {
                            "label": "основна мрежа"
                        },
                        "address": {
                            "label": "Адрес",
                            "placeholder": "Моля, въведете адреса",
                            "validation": {
                                "required": "Адресът не може да бъде празен"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "Адресът е невалиден, моля, въведете правилния адрес {{currency}}-{{network}}",
                        "singleAddressLimit": "Разрешено е обвързването само на 1 адрес. Ако трябва да промените, моля, свържете се с обслужване на клиенти",
                        "addressAlreadyExists": "Адресът вече съществува, моля, не го добавяйте отново"
                    },
                    "successBound": "Адресът е обвързан успешно"
                },
                "pleaseSelectAddress": "Моля, изберете адрес",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "Този адрес вече се използва. Ако трябва да го промените, моля, свържете се с обслужване на клиенти."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "Любезно напомняне"
                },
                "content": {
                    "deleteAddress": {
                        "main": "Потвърдете изтриването на адреса"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "Не е разрешено харесване",
                "subscribe": "Абонирай се",
                "subscribed": "Абониран",
                "subscribing": "Абониране",
                "views": "прегледа",
                "explore": "Разгледайте"
            },
            "shortsRevenue": {
                "title": "Късометражни видеа"
            },
            "telegram": {
                "title": "Официален Telegram",
                "joinGroup": "Присъединете се към Telegram група",
                "claimReward": "Получи 4 USDT",
                "inputs": {
                    "username": {
                        "label": "Telegram потребителско име",
                        "placeholder": "Моля, въведете вашето Telegram потребителско име",
                        "validation": {
                            "required": "Потребителското име в Telegram е задължително"
                        }
                    }
                },
                "rewardInstructions": "Инструкции за награда за присъединяване към група",
                "rewardInstruction1": "За да заявите наградата за присъединяване към група, моля, използвайте вашето потребителско име в Telegram.",
                "rewardInstruction2": "Само нови акаунти имат право да получат наградата. Акаунти, които вече са я получили, нямат право на награда за присъединяване към група.",
                "rewardStatuses": {
                    "pendingReview": "Вече сте подали заявка. Моля, изчакайте администраторът да изпрати наградата.",
                    "alreadyClaimed": "Наградата вече е получена.",
                    "pendingReviewGr": "Наградата за присъединяване към група е в процес на преглед. Уверете се, че сте се присъединили към групата, докато администраторът преглежда заявката ви.",
                    "notInGroup": "Потребителското име в Telegram, което сте въвели, не е в групата. Моля, кандидатствайте отново. Уверете се, че сте се присъединили към групата и че потребителското ви име в Telegram е правилно.",
                    "userNameUsed": "Потребителското име в Telegram вече се използва. Свържете се с обслужване на клиенти, ако смятате, че това е невярно."
                }
            },
            "missionsCenter": {
                "title": "Списък със задачи",
                "direct": "Директна задача",
                "team": "Екипна задача",
                "growth": "Задача за растеж",
                "progress": "Прогрес",
                "added": "Брой за събиране: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "Получено",
                "isClaiming": "Получаване",
                "inProgress": "В процес",
                "claimReward": "Получи",
                "addDirectActiveMembers": "Успешно поканете {{count}} членове от вашето първо поколение да се абонират за който и да е VIP пакет, и ще получите {{reward}} USDT",
                "addTeamMembers": "Получете {{reward}} USDT, когато абонаментите на вашето второ и трето поколение за VIP1 или по-високо достигнат общо {{count}} членове",
                "addGrowthMembers": "Добавете общо {{count}} активни членове",
                "rewardClaimed": "Наградата е получена успешно",
                "claimFailed": "Неуспешно получаване на награда"
            }
        }
    },
    it: {
        translation: {
            "global": {
                "copySuccess": "Copiato",
                "days": "Giorni",
                "insufficientBalance": "Saldo insufficiente",
                "wait48hrs": "Si prega di attendere 48 ore dopo aver cambiato la password dei fondi per prelevare",
                "pleaseEnter": "Inserisci",
                "save": "Salva",
                "ok": "OK",
                "error": {
                    "invalidCode": "Codice di verifica non valido",
                    "tryAgain": "Qualcosa è andato storto, riprova più tardi"
                },
                "saved": "Salvato",
                "day": "Giorno",
                "change": "Cambia",
                "from": "Da",
                "to": "A",
                "analyze": "Analizza",
                "total": "Totale",
                "loading": "Caricamento",
                "free": "Gratuito",
                "ongoingWithdrawal": "Può essere elaborato un solo prelievo alla volta",
                "waitAfterSuccessWithdraw": "Le richieste di prelievo successive devono essere effettuate 24 ore dopo il completamento del prelievo precedente",
                "waitAfterCanceledWithdraw": "Si prega di attendere 24 ore dopo aver annullato un prelievo prima di richiederne un altro",
                "todaysEarnings": "Guadagni di oggi",
                "cumulativeEarnings": "Guadagni cumulativi",
                "myLevel": "Il mio livello",
                "upgrade": "Aggiorna",
                "success": "Successo",
                "stayTuned": "Resta sintonizzato",
                "months": {
                    "jan": "Gen",
                    "feb": "Feb",
                    "mar": "Mar",
                    "apr": "Apr",
                    "may": "Mag",
                    "jun": "Giu",
                    "jul": "Lug",
                    "aug": "Ago",
                    "sep": "Set",
                    "oct": "Ott",
                    "nov": "Nov",
                    "dec": "Dic"
                },
                "people": "Persone",
                "views": "Visualizzazioni",
                "dontRepeat": "Per favore, non ripetere la richiesta",
                "sending": "Invio",

                "cancel": "Annulla",
                "confirm": "Conferma",
                "selectCategory": "Seleziona categoria"

            },
            "common": {
                "errorOccurred": "Si è verificato un errore"
            },
            "bottomBar": {
                "home": "Home",
                "team": "Squadra",
                "revenue": "Entrate",
                "record": "Musica",
                "mine": "Mio"
            },
            "home": {
                "viral": "Cortometraggi",
                "tredningNow": "Film popolari",
                "seeMore": "Vedi altro",
                "aboutUs": "Chi siamo",
                "help": "Aiuto",
                "missionCenter": "Centro missioni",
                "bonusDescription": "Descrizione bonus",
                "socialMedia": "Social media",
                "joinUs": "Unisciti al gruppo Telegram ufficiale di Eternova Films e ricevi 1 USDT come ricompensa.",
                "leader": "Partner Eternova Films City",
                "home": "Home",
                "forYou": "Per te",
                "inviteFriends": "Invita amici",
                "inviteFriendsText": "Invita amici per guadagnare",
                "annoucments": [
                    "Benvenuto su Eternova Films! Crea, condividi e guadagna dai tuoi brevi video."
                ]
            },
            "about": {
                "title": "Informazioni sull'azienda"
            },
            "notices": {
                "title": "Avvisi",
                "translation": {
                    "eternovafilms_open": {
                        "title": "Benvenuto su Eternova Films",
                        "content": "Siamo entusiasti di averti nella nostra comunità. Eternova Films è più di una semplice piattaforma, è un palcoscenico dove cinema, musica e creatività brillano insieme. Qui scoprirai storie potenti, performance indimenticabili e opportunità di crescita insieme a un pubblico globale di sognatori e creatori. Che tu sia qui per goderti film, esplorare musica o partecipare a nuove iniziative, il tuo viaggio inizia ora. Grazie per essere entrato in questo mondo con noi, insieme stiamo costruendo qualcosa di eterno. Unisciti al gruppo Telegram ufficiale e richiedi subito il tuo premio di 1 USDT!"
                    }
                }
            },
            "help": {
                "title": "Centro assistenza",
                "translation": {
                    "how_to_recharge": {
                        "title": "Come ricaricare",
                        "content": "Apri 'Mio' sulla barra in basso. Vai su 'Ricarica e prelievo' → 'Ricarica'. Scegli la tua valuta e la rete principale, quindi copia l'indirizzo del deposito."
                    },
                    "how_to_do_task_movie": {
                        "title": "Come svolgere un compito di un film",
                        "content": "Apri 'Entrate'. Trova il tuo pacchetto, tocca 'Punteggio' per raccogliere il reddito, scegli un video, quindi metti 'Mi piace'."
                    },
                    "how_to_do_task_music": {
                        "title": "Come svolgere un compito di musica",
                        "content": "Apri 'Musica'. Trova il tuo pacchetto, tocca 'Punteggio' per raccogliere il reddito, scegli un video, quindi metti 'Mi piace'."
                    },
                    "how_to_withdraw": {
                        "title": "Come prelevare",
                        "content": "Apri 'Mio' → 'Ricarica e prelievo' → 'Preleva'. Seleziona valuta e rete principale, scegli un indirizzo salvato, inserisci l'importo, tocca 'Conferma prelievo', quindi verifica con la tua password dei fondi."
                    },
                    "how_to_invite_friends": {
                        "title": "Come invitare amici",
                        "content": "Vai su 'Squadra' → 'Invita un amico'. Tocca 'Copia' per copiare il tuo codice di invito."
                    },
                    "how_to_register": {
                        "title": "Come registrarsi",
                        "content": "Nella pagina di registrazione: inserisci nome utente ed email, seleziona il prefisso internazionale del tuo telefono, inserisci il tuo numero di telefono, crea e conferma una password, aggiungi il codice di invito, quindi tocca la freccia 'Registra'."
                    },
                    "how_to_purchase_package_long": {
                        "title": "Come acquistare un pacchetto (sezione video lunghi)",
                        "content": "Apri 'VIP', scegli un pacchetto, quindi tocca 'Sblocca ora'."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "Come acquistare un pacchetto (sezione cortometraggi)",
                        "content": "Apri 'Cortometraggi', scegli un pacchetto, quindi tocca 'Sblocca ora'."
                    },
                    "how_to_transfer_funds": {
                        "title": "Come trasferire fondi da Ricarica & Prelievo a Punti Membro",
                        "content": "Apri 'Mio' → 'Ricarica e prelievo'. Tocca l'icona di trasferimento (in alto a destra), seleziona la valuta, inserisci l'importo, quindi tocca 'Conferma trasferimento'."
                    },
                    "how_to_reset_password": {
                        "title": "Come reimpostare la password",
                        "content": "Nella schermata di login, tocca 'Password dimenticata'. Inserisci la tua email, tocca 'Ottieni codice di verifica', inserisci il codice dalla tua email, imposta una nuova password, quindi tocca 'OK'."
                    },
                    "how_to_change_password": {
                        "title": "Come cambiare la password",
                        "content": "Apri 'Mio' → 'Password di accesso'. Inserisci la tua email, tocca 'Ottieni codice di verifica', inserisci il codice, imposta e conferma la tua nuova password, quindi tocca 'OK'."
                    },
                    "how_to_set_funding_password": {
                        "title": "Come impostare la password dei fondi",
                        "content": "Apri 'Mio' → 'Password delle transazioni'. Inserisci la tua email, tocca 'Ottieni codice di verifica', inserisci il codice, imposta e conferma la tua password dei fondi, quindi tocca 'OK'."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "Come collegare l'indirizzo di prelievo",
                        "content": "Apri 'Mio' → 'Ricarica e prelievo'. Apri l'elenco degli indirizzi → 'Aggiungi indirizzo'. Seleziona canale e rete principale, inserisci il tuo indirizzo di prelievo, verifica tramite codice email, quindi tocca 'OK'."
                    },
                    "how_to_protect_my_account": {
                        "title": "Come proteggere il mio account",
                        "content": "Apri 'Mio' → 'KYC Utente'. Inserisci nazionalità e nome reale, scegli il tipo di documento, compila il numero del documento, carica i documenti, quindi tocca 'Invia per la revisione'."
                    }
                }
            },
            "helpDetails": {
                "title": "Tutorial"
            },
            "introduction": {
                "title": "Spiegazione del reddito"
            },
            "social": {
                "title": "Social Media di Eternova Films",
                "offical": "Social Media",
                "officalTGChannel": "Canale Telegram Ufficiale",
                "officalTGGroup": "Gruppo Telegram Ufficiale",
                "subscribers": "iscritti",
                "join": "Iscriviti",
                "officalIG": "Profilo Instagram Ufficiale",
                "follow": "Segui",
                "followers": "follower",
                "community": "Comunità",
                "members": "membri",
                "new": "Nuovo",
                "errorRegion": "Si prega di acquistare un pacchetto per accedere a questo gruppo."
            },
            "notification": {
                "title": "Notifiche",
                "types": {
                    "eventNotification": "Notifica evento",
                    "walletMessage": "Messaggio portafoglio",
                    "systemNotification": "Notifica di sistema"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "Richiesta di prelievo",
                        "message": "Hai richiesto un prelievo di USDT, attendi l'approvazione, numero d'ordine: {{order_number}}, importo: {{amount}}, commissione: {{fee}}USDT"
                    },
                    "withdrawal_approve": {
                        "title": "Prelievo completato",
                        "message": "Il tuo prelievo è stato completato, numero d'ordine: {{order_number}}, importo: {{amount}}, commissione: {{fee}}USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC inviato",
                        "message": "Il tuo KYC è stato inviato per la revisione"
                    },
                    "kyc_approved": {
                        "title": "KYC approvato",
                        "message": "Il tuo KYC è stato approvato"
                    },
                    "kyc_rejected": {
                        "title": "KYC rifiutato",
                        "message": "Il tuo KYC è stato rifiutato"
                    }
                }
            },
            "notificationDetails": {
                "title": "Notifica"
            },
            "team": {
                "title": "Squadra",
                "benefitAnalysis": "Analisi dei benefici",
                "investmentIncome": "Reddito da investimenti",
                "teamMemberListBtn": "Elenco membri del team",
                "inviteFriend": "Invita un amico",
                "inviteFriendInfo": "Guarda film per iniziare a guadagnare",
                "totalIncome": "Reddito totale dell'utente",
                "todayIncome": "Reddito di oggi",
                "todayInc": "Oggi",
                "teamTotal": "Importo totale dell'abbonamento per la squadra",
                "likesIncome": "Reddito dai Mi piace",
                "teamIncome": "Reddito della squadra",
                "totalReturn": "Ritorno totale",
                "totalTeamMembers": "Membri totali del team",
                "addedToday": "Aggiunti oggi",
                "firstGeneration": "Prima generazione",
                "totalMembers": "Membri totali",
                "totalActiveMembers": "Attivi",
                "genTotalIncome": "Reddito totale",
                "secondGeneration": "Seconda generazione",
                "thirdGeneration": "Terza generazione",
                "fourthGeneration": "Quarta generazione",
                "fifthGeneration": "Quinta generazione",
                "totalNumberOfFriends": "Numero totale di amici",
                "activeFriends": "Amici attivi"
            },
            "myTeam": {
                "title": "Elenco membri del team",
                "id": "ID",
                "generation": "Generazione",
                "registrationDate": "Data di registrazione",
                "noResults": "Nessun risultato",
                "noMoreResults": "Nessun altro risultato"
            },
            "invite": {
                "title": "Invita un amico",
                "headline": "Guarda film per iniziare a guadagnare",
                "invitationLink": "Link di invito",
                "invitationCode": "Codice di invito"
            },
            "revenueMusic": {
                "title": "Centro membri Musica"
            },
            "revenue": {
                "title": "Centro membri",
                "score": {
                    "title": "Centro valutazione",
                    "type": "Tipo",
                    "director": "Regista",
                    "introduction": "Introduzione",
                    "recommendations": "Raccomandazioni correlate",
                    "categories": {
                        "upcoming_movies": "Prossimo film",
                        "popular_movies": "Film popolare"
                    },
                    "watch": "Guarda"
                },
                "specialPackage": "Pacchetti speciali",
                "currentlevel": "Livello attuale",
                "todayEarning": "Guadagno di oggi",
                "cumulativeEarning": "Guadagno cumulativo",
                "package": {
                    "view": "Visualizza",
                    "dailyPerView": "Visualizzazioni giornaliere",
                    "validTime": "Tempo valido",
                    "perViewIncome": "Reddito per visualizzazione",
                    "scoreBtn": "Valuta per ottenere reddito",
                    "openSoon": "Apre presto",
                    "stayTuned": "Resta sintonizzato",
                    "unlockNow": "Sblocca ora",
                    "expired": "Pacchetto scaduto",
                    "expiresIn": "Scade tra",
                    "totalReturn": "Ritorno totale",
                    "dailyReturn": "Ritorno giornaliero"
                },
                "packageDetails": "Dettagli",
                "packageExplain": "Dettagli pacchetti",
                "buy": {
                    "modal": {
                        "text": "Conferma di voler completare questo acquisto"
                    }
                }
            },
            "record": {
                "title": "Record",
                "viewRating": "Visualizza valutazione",
                "viewEarnings": "Visualizza guadagni",
                "noMoreRecords": "Nessun altro record"
            },
            "profile": {
                "ofcWeb": "Sito ufficiale",
                "partner": "Meccanismo Leader di Eternova Films",
                "officalWebsite": "Link sito ufficiale",
                "instagramAccount": "Account Instagram",
                "userKYC": "KYC utente",
                "telegram": "Telegram",
                "scoreRecord": "Record punteggi",
                "loginPasswordTab": "Password di accesso",
                "transactionPasswordTab": "Password di transazione",
                "notification": "Notifiche",
                "switchLanguage": "Cambia lingua",
                "contactCustomerService": "Contatta il servizio clienti",
                "appDownload": "Scarica l'app",
                "logOut": "Esci",
                "rechargeAndWithdraw": "Ricarica e prelievo",
                "unreleasedPoint": "Punti non rilasciati",
                "memberPoint": "Punti membro",
                "details": {
                    "title": "Informazioni personali",
                    "nickname": "Nickname",
                    "enterNickname": "Inserisci il tuo nickname",
                    "gender": "Sesso",
                    "male": "maschio",
                    "female": "femmina",
                    "validation": {
                        "nickname": {
                            "required": "Il nickname è richiesto"
                        },
                        "telegram": {
                            "invalid": "Nome utente Telegram non valido"
                        },
                        "whatsapp": {
                            "invalid": "Numero WhatsApp non valido"
                        }
                    },
                    "updatedSuccess": "Profilo aggiornato con successo"
                },
                "kyc": {
                    "title": "Verificato",
                    "errorPassport1": "Si prega di caricare l'immagine frontale del passaporto",
                    "errorPassport2": "Si prega di caricare un selfie con in mano il passaporto",
                    "errorID1": "Si prega di caricare l'immagine frontale della carta d'identità",
                    "errorID2": "Si prega di caricare l'immagine posteriore della carta d'identità",
                    "errorID3": "Si prega di caricare un selfie con in mano la carta d'identità",
                    "successMsg": "KYC inviato con successo per la revisione",
                    "errorMsg": "Invio KYC fallito, riprova",
                    "inputs": {
                        "nationality": {
                            "label": "Nazionalità",
                            "placeholder": "Inserisci la nazionalità",
                            "validation": {
                                "required": "La nazionalità è richiesta"
                            }
                        },
                        "name": {
                            "label": "Nome",
                            "placeholder": "Inserisci il tuo nome",
                            "validation": {
                                "required": "Il nome è richiesto"
                            }
                        },
                        "documentNumber": {
                            "label": "Numero documento",
                            "placeholder": "Inserisci il numero del documento",
                            "validation": {
                                "required": "Il numero del documento è richiesto"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "Il tipo di documento è richiesto"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "Tipi di documento",
                            "option1": "Carta d'identità",
                            "option2": "Passaporto",
                            "idCard": "Carta d'identità",
                            "passport": "Passaporto"
                        }
                    },
                    "uploadDocument": "Carica documento",
                    "frontOfDocument": "Fronte del documento",
                    "backOfDocument": "Retro del documento",
                    "selfieHoldingDocument": "Selfie con in mano il documento",
                    "actionButton": "Invia per la revisione",
                    "kycVerified": "Le tue informazioni sono state esaminate e verificate. I tuoi dati personali sono stati immediatamente cancellati. Il profilo è di nuovo attivo. Grazie per la tua collaborazione.",
                    "alreadySubmited": "Hai già inviato. Attendi il completamento del processo di revisione",
                    "underReview": "La tua richiesta di verifica è in fase di revisione",
                    "verified": "La tua verifica KYC è completa. I tuoi documenti sono stati accettati.",
                    "rejected": "Verifica KYC fallita. Si prega di inviare nuovamente i documenti.",
                },
                "loginPassword": {
                    "title": "Password di accesso",
                    "codeSent": "Codice di verifica inviato con successo",
                    "changedSuccess": "Password cambiata con successo",
                    "inputs": {
                        "email": {
                            "label": "Indirizzo email",
                            "placeholder": "Email"
                        },
                        "verifyCode": {
                            "label": "Codice di verifica",
                            "placeholder": "Inserisci il codice di verifica",
                            "sendBtn": "Invia",
                            "validation": {
                                "required": "Il codice di verifica è richiesto"
                            }
                        },
                        "newPassword": {
                            "label": "Nuova password",
                            "placeholder": "6-20 caratteri alfanumerici",
                            "validation": {
                                "required": "La nuova password è richiesta",
                                "min": "La password deve essere di almeno 6 caratteri",
                                "max": "La password non può essere più lunga di 20 caratteri"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Inserisci nuovamente la password per confermare",
                            "validation": {
                                "required": "Si prega di confermare la password",
                                "oneOf": "Le password devono corrispondere"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "Password dei fondi",
                    "codeSent": "Codice di verifica inviato con successo",
                    "changedSuccess": "Password dei fondi cambiata con successo",
                    "changedSuccessBind": "Password dei fondi collegata con successo",
                    "inputs": {
                        "email": {
                            "label": "Indirizzo email",
                            "placeholder": "Email"
                        },
                        "verifyCode": {
                            "label": "Codice di verifica",
                            "placeholder": "Inserisci il codice di verifica",
                            "sendBtn": "Invia",
                            "validation": {
                                "required": "Il codice di verifica è richiesto"
                            }
                        },
                        "newPassword": {
                            "label": "Password dei fondi",
                            "placeholder": "Combinazione di 6 cifre",
                            "validation": {
                                "required": "La nuova password dei fondi è richiesta",
                                "matches": "La password dei fondi deve essere esattamente di 6 cifre"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Inserisci nuovamente la password per confermare",
                            "validation": {
                                "required": "Si prega di confermare la password",
                                "oneOf": "Le password devono corrispondere"
                            }
                        }
                    },
                    "reminder": {
                        "title": "Promemoria importante",
                        "points": {
                            "point1": "La tua password dei fondi viene utilizzata per transazioni, prelievi e impostazioni di sicurezza dell'account. Si consiglia di non renderla uguale alla password di accesso. Il sito non è responsabile in caso di furto dell'account.",
                            "point2": "Dopo aver cambiato la password dei fondi, non puoi prelevare denaro per 48 ore"
                        }
                    }
                }
            },
            "wallet": {
                "title": "Ricarica e prelievo",
                "totalAssets": "Totale asset",
                "recharge": "Ricarica",
                "withdraw": "Preleva",
                "transfer": "Trasferisci",
                "assetDetails": "Dettagli asset",
                "cancelWithdrawal": "Annulla prelievo",
                "addresses": "Indirizzi",
                "filters": {
                    "all": "Tutti",
                    "recharge": "Ricarica",
                    "transfer": "Trasferisci",
                    "withdraw": "Preleva",
                    "levelPurchase": "Acquisto livello",
                    "taskReward": "Ricompensa attività",
                    "teamCommission": "Commissione team",
                    "bonus": "Bonus",
                    "salary": "Stipendio"
                },
                "timeRange": {
                    "title": "Seleziona intervallo di tempo"
                },
                "status": {
                    "completed": "Completato",
                    "rejected": "Rifiutato",
                    "processing": "In elaborazione",
                    "userCancel": "Annullato dall'utente",
                    "scheduled": "Pianificato",
                    "shouldArriveBy": "Dovrebbe arrivare entro",
                    "requiresAction": "Richiede attenzione",
                    "requiresActionContact": "Si prega di completare la verifica KYC per procedere con il prelievo."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "Sei sicuro di voler annullare il prelievo"
                    }
                }
            },
            "withdraw": {
                "title": "Prelievo asset",
                "currentlyAvailableAssets": "Asset attualmente disponibili",
                "selectCurrency": "Seleziona valuta",
                "mainnet": "Rete principale",
                "withdrawalAddress": "Indirizzo di prelievo",
                "withdrawalAddressPL": "Inserisci l'indirizzo di prelievo",
                "withdrawalAmount": "Importo del prelievo",
                "withdrawalAmountAllowed": "Importo consentito tra",
                "withdrawalAmountEnter": "Inserisci l'importo",
                "all": "Tutto",
                "fees": "Commissioni",
                "incomeTax": "Imposta sul reddito",
                "actualArrival": "Arrivo effettivo",
                "confirmWithdrawal": "Conferma prelievo",
                "withdrawalInstructions": "Istruzioni per il prelievo",
                "withdrawalInstruction1": "Tempo di arrivo: L'applicazione di prelievo sarà completata entro 1-72 ore.",
                "withdrawalInstruction2": "Intervallo di prelievo: Sono necessarie 24 ore dopo ogni arrivo riuscito per avviare un prelievo.",
                "withdrawalInstruction3": "Viene addebitata una commissione di 1 USDT per ogni prelievo.",
                "withdrawalInstruction4": "Standard fiscale",
                "withdrawalInstruction5": "1000 USDT e oltre: esente da tasse",
                "withdrawalInstruction6": "Le successive richieste di prelievo non possono essere avviate prima che il primo prelievo sia stato ricevuto.",
                "withdrawalInstruction7": "Importo minimo di prelievo: 15 USDT.",
                "validation": {
                    "address": {
                        "required": "L'indirizzo di prelievo è richiesto"
                    },
                    "amount": {
                        "required": "Inserisci l'importo del prelievo",
                        "invalid": "Inserisci l'importo del prelievo",
                        "min": "L'importo minimo di prelievo è 15 USDT",
                        "max": "L'importo massimo di prelievo è 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "Trasferisci",
                "transferSuccessfully": "Trasferimento riuscito",
                "transferCurrency": "Valuta di trasferimento",
                "rechargeAndWithdraw": "Ricarica e prelievo",
                "balance": "Saldo",
                "memberPoint": "Punti membro",
                "transferAmount": "Importo del trasferimento",
                "all": "tutto",
                "confirmTransfer": "Conferma trasferimento",
                "enterAmount": "Inserisci l'importo del trasferimento",
                "validation": {
                    "amount": {
                        "required": "Inserisci l'importo del trasferimento",
                        "invalid": "L'importo è richiesto",
                        "min": "L'importo minimo di trasferimento è 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "Deposito asset",
                "selectCurrency": "Seleziona valuta",
                "selectNetwork": "Seleziona rete",
                "mainnet": "Rete principale",
                "saveQRcode": "Salva codice QR",
                "depositAddress": "Indirizzo di deposito",
                "note": "Nota",
                "depositInstructions": "Istruzioni per il deposito",
                "instructions": [
                    "Prima di procedere, assicurati che il tipo di criptovaluta, la rete principale e le informazioni sull'indirizzo siano accurati.",
                    "L'importo minimo di deposito è 8 USDT; i depositi inferiori a questo importo non verranno accreditati.",
                    "Non depositare asset diversi da USDT o USDC a questo indirizzo, poiché i fondi non possono essere recuperati.",
                    "Ottieni sempre l'ultimo indirizzo di deposito prima di ogni transazione per garantire la sicurezza dei fondi, poiché gli indirizzi vengono periodicamente aggiornati."
                ]
            },
            "unreleased": {
                "title": "Punti non rilasciati",
                "desc": "Descrizione dei fondi da rilasciare",
                "burn": "Brucia",
                "burnCause": "I premi di invito inferiori alla porzione dell'amico causeranno la combustione",
                "friendshipLevel": "Livello di amicizia",
                "release": "Rilascia",
                "releaseCondition": "Uguale o superiore all'importo che può essere rilasciato dagli amici",
                "info1": "I fondi da rilasciare sono dovuti al fatto che il livello attuale è inferiore al livello degli amici nella squadra e la ricompensa di invito è stata bruciata.",
                "info2": "Quando l'utente si aggiorna per essere uguale o superiore al livello dell'amico della squadra, può ottenere questa parte dell'importo da rilasciare.",
                "toBeReleased": "Quota da rilasciare"
            },
            "memberPoint": {
                "title": "Punti membro",
                "totalAssets": "Totale asset",
                "assetDeposit": "Deposito asset",
                "assetDetails": "Dettagli asset"
            },
            "appDownload": {
                "title": "Scarica l'app",
                "subtitle": "Scarica l'app per un'esperienza migliore",
                "googlePlay": {
                    "label": "Scarica da Google Play Store"
                },
                "appStore": {
                    "label": "Scarica da Apple Store"
                },
                "note": "Nota: Durante il processo di download e installazione, se si verifica un errore di download, un errore di analisi del pacchetto di installazione o un'eccezione di installazione, si prega di scaricare e installare nuovamente"
            },
            "login": {
                "accountLogin": "Accesso account",
                "noAccountYet": "Non hai ancora un account?",
                "registerNow": "Registrati ora",
                "tabs": {
                    "username": "Accesso con nome utente",
                    "email": "Accesso con email"
                },
                "inputs": {
                    "username": {
                        "placeholder": "Nome utente",
                        "validation": {
                            "required": "Il nome utente è richiesto",
                            "min": "Il nome utente deve essere di almeno 3 caratteri"
                        }
                    },
                    "email": {
                        "placeholder": "E-mail",
                        "validation": {
                            "required": "L'email è richiesta",
                            "invalid": "Formato email non valido"
                        }
                    },
                    "password": {
                        "label": "Password",
                        "placeholder": "Password",
                        "validation": {
                            "required": "La password è richiesta",
                            "min": "La password deve essere di almeno 6 caratteri"
                        },
                        "show": "Mostra password",
                        "hide": "Nascondi password"
                    }
                },
                "links": {
                    "forgot": "Hai dimenticato la password?",
                    "register": {
                        "text": "Non hai un account?",
                        "link": "Registrati ora"
                    }
                },
                "buttons": {
                    "login": "Accedi"
                },
                "success": "Riuscito",
                "terms": {
                    "validation": {
                        "required": "Devi accettare i termini e le condizioni"
                    }
                },
                "errors": {
                    "userNotFound": "Utente non trovato",
                    "wrongPassword": "Password errata"
                }
            },
            "register": {
                "title": "Registrati",
                "accountRegistration": "Registrazione account",
                "alreadyHaveAccount": "Hai già un account?",
                "loginNow": "Accedi ora",
                "inputs": {
                    "username": {
                        "placeholder": "Nome utente",
                        "validation": {
                            "required": "Il nome utente è richiesto",
                            "min": "Il nome utente deve essere di almeno 5 caratteri",
                            "matches": "Il nome utente deve iniziare con una lettera, può contenere solo lettere, numeri, '_' o '.', e non può iniziare o finire con un carattere speciale o un numero."
                        }
                    },
                    "email": {
                        "placeholder": "Indirizzo E-mail",
                        "validation": {
                            "required": "L'email è richiesta",
                            "invalid": "Formato email non valido"
                        }
                    },
                    "phone": {
                        "placeholder": "Numero di cellulare",
                        "validation": {
                            "required": "Il numero di telefono è richiesto",
                            "digits": "Il numero di telefono deve contenere solo cifre"
                        }
                    },
                    "password": {
                        "placeholder": "Password di accesso",
                        "validation": {
                            "required": "La password è richiesta",
                            "min": "La password deve essere di almeno 6 caratteri"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "Conferma password",
                        "validation": {
                            "required": "Si prega di confermare la password",
                            "match": "Le password devono corrispondere"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "Codice di invito",
                        "validation": {
                            "required": "Il codice di invito è richiesto"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "Email già in uso",
                    "usernameTaken": "Nome utente già in uso",
                    "invalidReferral": "Codice di riferimento non valido"
                },
                "buttons": {
                    "register": "Registrati"
                },
                "terms": {
                    "validation": {
                        "required": "Devi accettare i termini e le condizioni"
                    }
                },
                "links": {
                    "login": {
                        "text": "Hai già un account?",
                        "link": "Accedi ora"
                    }
                },
                "success": "Registrazione avvenuta con successo",
                "countrySelector": {
                    "title": "Seleziona paese"
                }
            },
            "terms": {
                "part1": "Continuando con un account situato nel Regno Unito, accetti i nostri",
                "part2": "Termini di servizio",
                "part3": "e riconosci di aver letto la nostra",
                "part4": "Informativa sulla privacy.",
                "title": "Informativa sulla privacy di Eternova Films"
            },
            "areaCode": {
                "label": "Scegli il prefisso"
            },
            "forgetPassword": {
                "title": "Password dimenticata",
                "inputs": {
                    "email": {
                        "label": "E-MAIL",
                        "placeholder": "La tua email",
                        "validation": {
                            "required": "L'email è richiesta",
                            "invalid": "Formato email non valido"
                        }
                    },
                    "verificationCode": {
                        "label": "Codice di verifica",
                        "placeholder": "Inserisci il codice di verifica",
                        "validation": {
                            "required": "Il codice di verifica è richiesto"
                        },
                        "button": "Ottieni codice di verifica "
                    },
                    "newPassword": {
                        "label": "Nuova password",
                        "placeholder": "Inserisci una nuova password",
                        "validation": {
                            "required": "La nuova password è richiesta",
                            "min": "La password deve essere di almeno 6 caratteri"
                        },
                        "show": "Mostra password",
                        "hide": "Nascondi password"
                    }
                },
                "buttons": {
                    "reset": "Reimposta"
                },
                "alerts": {
                    "emailRequired": "Inserisci un'email valida",
                    "codeSent": "Codice di verifica inviato alla tua email",
                    "sendError": "Invio codice fallito",
                    "restSuccess": "Password reimpostata con successo. Si prega di accedere.",
                    "emailNotFound": "Email non trovata",
                    "codeExpired": "Codice scaduto"
                }
            },
            "verifyFundsPassword": {
                "title": "Verifica password dei fondi",
                "inputs": {
                    "fundsPassword": {
                        "label": "Password dei fondi",
                        "placeholder": "Inserisci la password dei fondi",
                        "validation": {
                            "required": "La password dei fondi è richiesta",
                            "matches": "La password dei fondi deve essere esattamente di 6 cifre"
                        }
                    }
                },
                "buttons": {
                    "verify": "Verifica"
                },
                "alerts": {
                    "noFundsPassword": "Si prega di collegare la password di transazione",
                    "checkError": "Si è verificato un errore durante il controllo della password dei fondi",
                    "purchaseSuccess": "Pacchetto acquistato con successo",
                    "withdrawalSuccess": "Prelievo richiesto con successo",
                    "insufficientBalance": "Saldo insufficiente",
                    "transferToTask": "Si prega di trasferire il saldo dal prelievo ai punti membro",
                    "invalidPurchase": "Avvio acquisto non valido",
                    "incorrectPassword": "Password dei fondi errata",
                    "purchaseError": "Si è verificato un errore durante l'acquisto",
                    "wait48Hours": "Si prega di attendere 48 ore dopo aver cambiato la password dei fondi per prelevare",
                    "unauthorizedRequest": "Richiesta non autorizzata",
                    "generalError": "Si è verificato un errore, riprova più tardi",
                    "tooManyAttempts": "Troppi tentativi, riprova più tardi"
                }
            },
            "setFundsPassword": {
                "title": "Imposta password dei fondi",
                "inputs": {
                    "fundsPassword": {
                        "label": "Password dei fondi",
                        "placeholder": "Imposta password dei fondi",
                        "validation": {
                            "required": "La password dei fondi è richiesta",
                            "matches": "La password dei fondi deve essere esattamente di 6 cifre"
                        }
                    },
                    "confirmPassword": {
                        "label": "Conferma password dei fondi",
                        "placeholder": "Conferma password dei fondi",
                        "validation": {
                            "required": "Si prega di confermare la password dei fondi",
                            "matches": "Le password devono corrispondere"
                        }
                    }
                },
                "buttons": {
                    "save": "Salva"
                },
                "alerts": {
                    "success": "Password dei fondi impostata con successo",
                    "error": "Si è verificato un errore durante l'impostazione della password dei fondi"
                }
            },
            "lang": {
                "title": "Cambia lingua"
            },
            "reels": {
                "missionAreaLabel": "Area Missione",
                "errors": {
                    "selectValidPackage": "Seleziona una missione VIP",
                    "dailyLimitReached": "Limite raggiunto",
                    "notPurchased": "Nessun pacchetto trovato",
                    "packageExpired": "Pacchetto scaduto",
                    "alreadyLiked": "Già visto"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "Area Missione VIP"
                    }
                }
            },
            "agentPromotion": {
                "title": "Sistema di promozione agente",
                "teamSize": "Dimensioni del team",
                "nextStageTeamSize": "Dimensioni del team per la prossima fase",
                "nextStageGroupPromotionReward": "Ricompensa per la promozione del gruppo alla prossima fase",
                "taskList": "Elenco attività",
                "firstGenInvite": "Invita un membro di primo livello",
                "secondGenInvite": "Invita un membro secondario",
                "thirdGenInvite": "Invita un membro di terzo livello",
                "lastWeekIncrease": "Aumento della scorsa settimana",
                "thisWeekIncrease": "Aumento di questa settimana",
                "available": "Disponibile",
                "receiveBtn": "Ricevi",
                "levels": {
                    "beginnerCreator": "Creatore principiante",
                    "skilledSpecialist": "Specialista esperto",
                    "seniorSpecialist": "Specialista senior",
                    "supervisor": "Supervisore",
                    "seniorSupervisor": "Supervisore senior",
                    "regionalManager": "Manager regionale",
                    "seniorManager": "Manager senior"
                }
            },
            "addressList": {
                "title": "Elenco indirizzi",
                "addAddressBtn": "Aggiungi indirizzo",
                "bidingAddress": {
                    "title": "Associa indirizzo",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "Canale di ricarica"
                        },
                        "mainnet": {
                            "label": "Rete principale"
                        },
                        "address": {
                            "label": "Indirizzo",
                            "placeholder": "Inserisci l'indirizzo",
                            "validation": {
                                "required": "L'indirizzo non può essere vuoto"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "L'indirizzo non è valido, inserisci l'indirizzo {{currency}}-{{network}} corretto",
                        "singleAddressLimit": "È consentito associare solo 1 indirizzo, se devi cambiarlo, contatta il servizio clienti",
                        "addressAlreadyExists": "L'indirizzo esiste già, non aggiungerlo di nuovo"
                    },
                    "successBound": "Indirizzo associato con successo"
                },
                "pleaseSelectAddress": "Seleziona un indirizzo",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "Questo indirizzo è già in uso. Se devi cambiarlo, contatta il servizio clienti."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "Promemoria importante"
                },
                "content": {
                    "deleteAddress": {
                        "main": "Conferma di voler eliminare l'indirizzo"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "Non è consentito il 'Non mi piace'",
                "subscribe": "Iscriviti",
                "subscribed": "Iscritto",
                "subscribing": "Iscrizione in corso",
                "views": "visualizzazioni",
                "explore": "Esplora"
            },
            "shortsRevenue": {
                "title": "Cortometraggi"
            },
            "telegram": {
                "title": "Telegram Ufficiale",
                "joinGroup": "Iscriviti al gruppo Telegram",
                "claimReward": "Richiedi 4 USDT",
                "inputs": {
                    "username": {
                        "label": "Nome utente Telegram",
                        "placeholder": "Inserisci il tuo nome utente Telegram",
                        "validation": {
                            "required": "Il nome utente Telegram è richiesto"
                        }
                    }
                },
                "rewardInstructions": "Istruzioni per la ricompensa di ingresso nel gruppo",
                "rewardInstruction1": "Per richiedere la ricompensa di ingresso nel gruppo, usa il tuo nome utente Telegram.",
                "rewardInstruction2": "Solo i nuovi account sono idonei a ricevere la ricompensa. Gli account che l'hanno già ricevuta non sono idonei per la ricompensa di ingresso nel gruppo.",
                "rewardStatuses": {
                    "pendingReview": "Hai già inviato la richiesta. Attendi che l'amministratore invii la ricompensa.",
                    "alreadyClaimed": "Ricompensa già richiesta.",
                    "pendingReviewGr": "La ricompensa di ingresso nel gruppo è in fase di revisione. Assicurati di esserti iscritto al gruppo mentre l'amministratore sta esaminando la tua richiesta.",
                    "notInGroup": "Il nome utente Telegram che hai inserito non è nel gruppo. Riprova. Assicurati di esserti iscritto al gruppo e che il tuo nome utente Telegram sia corretto.",
                    "userNameUsed": "Nome utente Telegram già in uso. Contatta il servizio clienti se ritieni che sia un errore."
                }
            },
            "missionsCenter": {
                "title": "Elenco attività",
                "direct": "Attività dirette",
                "team": "Attività di squadra",
                "growth": "Attività di crescita",
                "progress": "Avanzamento",
                "added": "Numero da raccogliere: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "Richieste",
                "isClaiming": "Richiesta in corso",
                "inProgress": "In corso",
                "claimReward": "Richiedi",
                "addDirectActiveMembers": "Invita con successo {{count}} membri della tua prima generazione a sottoscrivere qualsiasi pacchetto VIP e riceverai {{reward}} USDT",
                "addTeamMembers": "Ricevi {{reward}} USDT quando le iscrizioni dei membri della tua seconda e terza generazione a VIP1 o superiore raggiungono un totale di {{count}} membri",
                "addGrowthMembers": "Aggiungi {{count}} membri attivi totali",
                "rewardClaimed": "Ricompensa richiesta con successo",
                "claimFailed": "Richiesta ricompensa fallita"
            }
        }
    },
    ja: {
        translation: {
            "global": {
                "copySuccess": "コピーしました",
                "days": "日",
                "insufficientBalance": "残高不足です",
                "wait48hrs": "資金パスワードを変更してから48時間後に引き出しが可能です",
                "pleaseEnter": "入力してください",
                "save": "保存",
                "ok": "OK",
                "error": {
                    "invalidCode": "認証コードが無効です",
                    "tryAgain": "問題が発生しました。後でもう一度お試しください",
                },
                "saved": "保存しました",
                "day": "日",
                "change": "変更",
                "from": "から",
                "to": "まで",
                "analyze": "分析",
                "total": "合計",
                "loading": "読み込み中",
                "free": "無料",
                "ongoingWithdrawal": "一度に1つの引き出しのみ処理できます",
                "waitAfterSuccessWithdraw": "次の引き出しリクエストは、前回の引き出し完了から24時間後に行ってください",
                "waitAfterCanceledWithdraw": "引き出しをキャンセルしてから24時間後にもう一度リクエストしてください",
                "todaysEarnings": "今日の収益",
                "cumulativeEarnings": "累計収益",
                "myLevel": "マイレベル",
                "upgrade": "アップグレード",
                "success": "成功",
                "stayTuned": "乞うご期待",
                "months": {
                    "jan": "1月",
                    "feb": "2月",
                    "mar": "3月",
                    "apr": "4月",
                    "may": "5月",
                    "jun": "6月",
                    "jul": "7月",
                    "aug": "8月",
                    "sep": "9月",
                    "oct": "10月",
                    "nov": "11月",
                    "dec": "12月"
                },
                "people": "人",
                "views": "再生回数",
                "dontRepeat": "リクエストを繰り返さないでください",
                "sending": "送信中",


                "cancel": "キャンセル",
                "confirm": "確認",
                "selectCategory": "カテゴリーを選択"

            },
            "common": {
                "errorOccurred": "エラーが発生しました"
            },
            "bottomBar": {
                "home": "ホーム",
                "team": "チーム",
                "revenue": "収益",
                "record": "ミュージック",
                "mine": "マイページ"
            },
            "home": {
                "viral": "ショート動画",
                "tredningNow": "人気の映画",
                "seeMore": "もっと見る",
                "aboutUs": "会社概要",
                "help": "ヘルプ",
                "missionCenter": "ミッションセンター",
                "bonusDescription": "ボーナスの説明",
                "socialMedia": "ソーシャルメディア",
                "joinUs": "Eternova Films公式Telegramグループに参加して、1 USDTの報酬を受け取りましょう。",
                "leader": "Eternova Filmsシティパートナー",
                "home": "ホーム",
                "forYou": "おすすめ",
                "inviteFriends": "友達を招待",
                "inviteFriendsText": "友達を招待して収入を獲得",
                "annoucments": [
                    "Eternova Filmsへようこそ！ショート動画を作成、共有して収益を獲得しましょう。"
                ]
            },
            "about": {
                "title": "会社概要"
            },
            "notices": {
                "title": "お知らせ",
                "translation": {
                    "eternovafilms_open": {
                        "title": "Eternova Filmsへようこそ",
                        "content": "コミュニティにご参加いただき、誠にありがとうございます。Eternova Filmsは単なるプラットフォームではなく、映画、音楽、創造性が共に輝くステージです。ここでは、力強い物語、忘れられないパフォーマンス、そして夢を追うクリエイターたちと共に成長する機会を発見できます。映画を楽しんだり、音楽を探求したり、新しい事業に参加したり、あなたの旅は今始まります。私たちと共にこの世界へ足を踏み入れてくださりありがとうございます。一緒に時代を超えたものを作り上げましょう。今すぐ公式Telegramグループに参加して、1 USDTの報酬を受け取りましょう！"
                    }
                }
            },
            "help": {
                "title": "ヘルプセンター",
                "translation": {
                    "how_to_recharge": {
                        "title": "チャージ方法",
                        "content": "ボトムバーの「マイページ」を開きます。「チャージ＆引き出し」→「チャージ」へ進みます。通貨とメインネットを選択し、入金アドレスをコピーします。"
                    },
                    "how_to_do_task_movie": {
                        "title": "映画タスクの実行方法",
                        "content": "「収益」を開きます。パッケージを見つけ、「スコア」をタップして収益を収集し、動画を選択して「いいね」をタップします。"
                    },
                    "how_to_do_task_music": {
                        "title": "音楽タスクの実行方法",
                        "content": "「ミュージック」を開きます。パッケージを見つけ、「スコア」をタップして収益を収集し、動画を選択して「いいね」をタップします。"
                    },
                    "how_to_withdraw": {
                        "title": "引き出し方法",
                        "content": "「マイページ」→「チャージ＆引き出し」→「引き出し」を開きます。通貨とメインネットを選択し、保存済みのアドレスを選び、金額を入力し、「引き出しを確定」をタップして、資金パスワードで認証します。"
                    },
                    "how_to_invite_friends": {
                        "title": "友達の招待方法",
                        "content": "「チーム」→「友達を招待」へ進みます。「コピー」をタップして招待コードをコピーします。"
                    },
                    "how_to_register": {
                        "title": "登録方法",
                        "content": "登録ページで、ユーザー名とメールアドレスを入力し、電話の国コードを選択し、電話番号を入力し、パスワードを作成して確認し、招待コードを追加して、「登録」矢印をタップします。"
                    },
                    "how_to_purchase_package_long": {
                        "title": "パッケージの購入方法（長編動画セクション）",
                        "content": "「VIP」を開き、パッケージを選択し、「今すぐアンロック」をタップします。"
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "パッケージの購入方法（ショート動画セクション）",
                        "content": "「ショート動画」を開き、パッケージを選択し、「今すぐアンロック」をタップします。"
                    },
                    "how_to_transfer_funds": {
                        "title": "チャージ＆引き出しから会員ポイントへの資金移動方法",
                        "content": "「マイページ」→「チャージ＆引き出し」を開きます。送金アイコン（右上）をタップし、通貨を選択し、金額を入力し、「送金を確定」をタップします。"
                    },
                    "how_to_reset_password": {
                        "title": "パスワードのリセット方法",
                        "content": "ログイン画面で「パスワードを忘れた場合」をタップします。メールアドレスを入力し、「認証コードを取得」をタップし、メールに届いたコードを入力し、新しいパスワードを設定し、「OK」をタップします。"
                    },
                    "how_to_change_password": {
                        "title": "パスワードの変更方法",
                        "content": "「マイページ」→「ログインパスワード」を開きます。メールアドレスを入力し、「認証コードを取得」をタップし、コードを入力し、新しいパスワードを設定して確認し、「OK」をタップします。"
                    },
                    "how_to_set_funding_password": {
                        "title": "資金パスワードの設定方法",
                        "content": "「マイページ」→「取引パスワード」を開きます。メールアドレスを入力し、「認証コードを取得」をタップし、コードを入力し、資金パスワードを設定して確認し、「OK」をタップします。"
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "引き出しアドレスの紐付け方法",
                        "content": "「マイページ」→「チャージ＆引き出し」を開きます。アドレスリスト→「アドレスを追加」を開きます。チャンネルとメインネットを選択し、引き出しアドレスを入力し、メールのコードで認証し、「OK」をタップします。"
                    },
                    "how_to_protect_my_account": {
                        "title": "アカウントの保護方法",
                        "content": "「マイページ」→「ユーザーKYC」を開きます。国籍と本名を入力し、書類の種類を選択し、書類番号を記入し、書類をアップロードして、「審査に提出」をタップします。"
                    }
                }
            },
            "helpDetails": {
                "title": "チュートリアル"
            },
            "introduction": {
                "title": "収益の説明"
            },
            "social": {
                "title": "Eternova Films ソーシャルメディア",
                "offical": "ソーシャルメディア",
                "officalTGChannel": "公式Telegramチャンネル",
                "officalTGGroup": "公式Telegramグループ",
                "subscribers": "登録者",
                "join": "参加",
                "officalIG": "公式Instagramプロフィール",
                "follow": "フォロー",
                "followers": "フォロワー",
                "community": "コミュニティ",
                "members": "メンバー",
                "new": "新規",
                "errorRegion": "このグループにアクセスするには、パッケージを購入してください。"
            },
            "notification": {
                "title": "通知",
                "types": {
                    "eventNotification": "イベント通知",
                    "walletMessage": "ウォレットメッセージ",
                    "systemNotification": "システム通知"
                },
                "translation": {
                    "withdrawal_apply": {
                        "title": "引き出し申請",
                        "message": "USDTの引き出しを申請しました。承認をお待ちください。注文番号：{{order_number}}、金額：{{amount}}、手数料：{{fee}}USDT"
                    },
                    "withdrawal_approve": {
                        "title": "引き出し完了",
                        "message": "引き出しが完了しました。注文番号：{{order_number}}、金額：{{amount}}、手数料：{{fee}}USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC提出済み",
                        "message": "あなたのKYCは審査のために提出されました"
                    },
                    "kyc_approved": {
                        "title": "KYC承認済み",
                        "message": "あなたのKYCは承認されました"
                    },
                    "kyc_rejected": {
                        "title": "KYC拒否",
                        "message": "あなたのKYCは拒否されました"
                    }
                }
            },
            "notificationDetails": {
                "title": "通知"
            },
            "team": {
                "title": "チーム",
                "benefitAnalysis": "利益分析",
                "investmentIncome": "投資収益",
                "teamMemberListBtn": "チームメンバーリスト",
                "inviteFriend": "友達を招待",
                "inviteFriendInfo": "映画を見て収入を得よう",
                "totalIncome": "ユーザー総収益",
                "todayIncome": "今日の収益",
                "todayInc": "今日",
                "teamTotal": "チームの総サブスクリプション額",
                "likesIncome": "いいね収益",
                "teamIncome": "チーム収益",
                "totalReturn": "総リターン",
                "totalTeamMembers": "チームメンバー総数",
                "addedToday": "今日追加",
                "firstGeneration": "第一世代",
                "totalMembers": "総メンバー数",
                "totalActiveMembers": "アクティブ",
                "genTotalIncome": "総収益",
                "secondGeneration": "第二世代",
                "thirdGeneration": "第三世代",
                "fourthGeneration": "第四世代",
                "fifthGeneration": "第五世代",
                "totalNumberOfFriends": "友達の総数",
                "activeFriends": "アクティブな友達"
            },
            "myTeam": {
                "title": "チームメンバーリスト",
                "id": "ID",
                "generation": "世代",
                "registrationDate": "登録日",
                "noResults": "結果がありません",
                "noMoreResults": "これ以上結果はありません"
            },
            "invite": {
                "title": "友達を招待",
                "headline": "映画を見て収入を得よう",
                "invitationLink": "招待リンク",
                "invitationCode": "招待コード"
            },
            "revenueMusic": {
                "title": "ミュージックメンバーセンター"
            },
            "revenue": {
                "title": "メンバーセンター",
                "score": {
                    "title": "スコアリングセンター",
                    "type": "タイプ",
                    "director": "監督",
                    "introduction": "紹介",
                    "recommendations": "関連のおすすめ",
                    "categories": {
                        "upcoming_movies": "近日公開",
                        "popular_movies": "人気映画"
                    },
                    "watch": "視聴"
                },
                "specialPackage": "スペシャルパッケージ",
                "currentlevel": "現在のレベル",
                "todayEarning": "今日の収益",
                "cumulativeEarning": "累計収益",
                "package": {
                    "view": "視聴",
                    "dailyPerView": "1日の視聴数",
                    "validTime": "有効期間",
                    "perViewIncome": "1回あたりの視聴収益",
                    "scoreBtn": "スコアを付けて収益を得る",
                    "openSoon": "近日公開",
                    "stayTuned": "乞うご期待",
                    "unlockNow": "今すぐアンロック",
                    "expired": "パッケージの有効期限が切れました",
                    "expiresIn": "有効期限まで",
                    "totalReturn": "総リターン",
                    "dailyReturn": "1日のリターン"
                },
                "packageDetails": "詳細",
                "packageExplain": "パッケージ詳細",
                "buy": {
                    "modal": {
                        "text": "この購入を完了することを確認してください"
                    }
                }
            },
            "record": {
                "title": "記録",
                "viewRating": "評価を見る",
                "viewEarnings": "収益を見る",
                "noMoreRecords": "これ以上記録はありません"
            },
            "profile": {
                "ofcWeb": "公式サイト",
                "partner": "Eternova Filmsリーダープログラム",
                "officalWebsite": "公式サイトリンク",
                "instagramAccount": "Instagramアカウント",
                "userKYC": "ユーザーKYC",
                "telegram": "Telegram",
                "scoreRecord": "スコア記録",
                "loginPasswordTab": "ログインパスワード",
                "transactionPasswordTab": "取引パスワード",
                "notification": "通知",
                "switchLanguage": "言語切り替え",
                "contactCustomerService": "カスタマーサービスに連絡",
                "appDownload": "アプリダウンロード",
                "logOut": "ログアウト",
                "rechargeAndWithdraw": "チャージと引き出し",
                "unreleasedPoint": "未公開ポイント",
                "memberPoint": "会員ポイント",
                "details": {
                    "title": "個人情報",
                    "nickname": "ニックネーム",
                    "enterNickname": "ニックネームを入力してください",
                    "gender": "性別",
                    "male": "男性",
                    "female": "女性",
                    "validation": {
                        "nickname": {
                            "required": "ニックネームは必須です"
                        },
                        "telegram": {
                            "invalid": "無効なTelegramユーザー名です"
                        },
                        "whatsapp": {
                            "invalid": "無効なWhatsApp番号です"
                        }
                    },
                    "updatedSuccess": "プロフィールが正常に更新されました"
                },
                "kyc": {
                    "title": "認証済み",
                    "errorPassport1": "パスポートの表面画像をアップロードしてください",
                    "errorPassport2": "パスポートを持った自撮り写真をアップロードしてください",
                    "errorID1": "IDカードの表面画像をアップロードしてください",
                    "errorID2": "IDカードの裏面画像をアップロードしてください",
                    "errorID3": "IDカードを持った自撮り写真をアップロードしてください",
                    "successMsg": "KYCが正常に審査のため提出されました",
                    "errorMsg": "KYCの提出に失敗しました。もう一度お試しください",
                    "inputs": {
                        "nationality": {
                            "label": "国籍",
                            "placeholder": "国籍を入力してください",
                            "validation": {
                                "required": "国籍は必須です"
                            }
                        },
                        "name": {
                            "label": "氏名",
                            "placeholder": "氏名を入力してください",
                            "validation": {
                                "required": "氏名は必須です"
                            }
                        },
                        "documentNumber": {
                            "label": "書類番号",
                            "placeholder": "ID番号を入力してください",
                            "validation": {
                                "required": "書類番号は必須です"
                            }
                        },
                        "documentType": {
                            "validation": {
                                "required": "書類の種類は必須です"
                            }
                        }
                    },
                    "options": {
                        "documentType": {
                            "label": "書類の種類",
                            "option1": "IDカード",
                            "option2": "パスポート",
                            "idCard": "IDカード",
                            "passport": "パスポート"
                        }
                    },
                    "uploadDocument": "書類のアップロード",
                    "frontOfDocument": "書類の表面",
                    "backOfDocument": "書類の裏面",
                    "selfieHoldingDocument": "書類を持った自撮り写真",
                    "actionButton": "審査に提出",
                    "kycVerified": "あなたの情報は審査され、認証されました。個人情報は直ちに削除されました。プロフィールは再びアクティブになりました。ご協力ありがとうございます。",
                    "alreadySubmited": "すでに提出済みです。審査が完了するまでお待ちください",
                    "underReview": "認証リクエストは審査中です",
                    "verified": "KYC認証が完了しました。書類が承認されました。",
                    "rejected": "KYC認証に失敗しました。書類を再提出してください。",
                },
                "loginPassword": {
                    "title": "ログインパスワード",
                    "codeSent": "認証コードが正常に送信されました",
                    "changedSuccess": "パスワードが正常に変更されました",
                    "inputs": {
                        "email": {
                            "label": "メールアドレス",
                            "placeholder": "メールアドレス"
                        },
                        "verifyCode": {
                            "label": "認証コード",
                            "placeholder": "認証コードを入力してください",
                            "sendBtn": "送信",
                            "validation": {
                                "required": "認証コードは必須です"
                            }
                        },
                        "newPassword": {
                            "label": "新しいパスワード",
                            "placeholder": "6-20文字の英数字",
                            "validation": {
                                "required": "新しいパスワードは必須です",
                                "min": "パスワードは6文字以上でなければなりません",
                                "max": "パスワードは20文字を超えることはできません"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "確認のためもう一度パスワードを入力してください",
                            "validation": {
                                "required": "パスワードを確認してください",
                                "oneOf": "パスワードが一致しません"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "資金パスワード",
                    "codeSent": "認証コードが正常に送信されました",
                    "changedSuccess": "資金パスワードが正常に変更されました",
                    "changedSuccessBind": "資金パスワードが正常に紐付けられました",
                    "inputs": {
                        "email": {
                            "label": "メールアドレス",
                            "placeholder": "メールアドレス"
                        },
                        "verifyCode": {
                            "label": "認証コード",
                            "placeholder": "認証コードを入力してください",
                            "sendBtn": "送信",
                            "validation": {
                                "required": "認証コードは必須です"
                            }
                        },
                        "newPassword": {
                            "label": "資金パスワード",
                            "placeholder": "6桁の数字の組み合わせ",
                            "validation": {
                                "required": "新しい資金パスワードは必須です",
                                "matches": "資金パスワードは6桁でなければなりません"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "確認のためもう一度パスワードを入力してください",
                            "validation": {
                                "required": "パスワードを確認してください",
                                "oneOf": "パスワードが一致しません"
                            }
                        }
                    },
                    "reminder": {
                        "title": "注意",
                        "points": {
                            "point1": "資金パスワードは、取引、引き出し、アカウントのセキュリティ設定に使用されます。ログインパスワードと同じにしないことをお勧めします。もし盗難が発生した場合、当サイトは責任を負いません。",
                            "point2": "資金パスワードを変更した後、48時間以内は引き出しができません"
                        }
                    }
                }
            },
            "wallet": {
                "title": "チャージと引き出し",
                "totalAssets": "総資産",
                "recharge": "チャージ",
                "withdraw": "引き出し",
                "transfer": "送金",
                "assetDetails": "資産詳細",
                "cancelWithdrawal": "引き出しをキャンセル",
                "addresses": "アドレス",
                "filters": {
                    "all": "すべて",
                    "recharge": "チャージ",
                    "transfer": "送金",
                    "withdraw": "引き出し",
                    "levelPurchase": "レベル購入",
                    "taskReward": "タスク報酬",
                    "teamCommission": "チームコミッション",
                    "bonus": "ボーナス",
                    "salary": "給与"
                },
                "timeRange": {
                    "title": "期間を選択"
                },
                "status": {
                    "completed": "完了",
                    "rejected": "拒否",
                    "processing": "処理中",
                    "userCancel": "ユーザーがキャンセル",
                    "scheduled": "予定済み",
                    "shouldArriveBy": "到着予定",
                    "requiresAction": "注意が必要です",
                    "requiresActionContact": "引き出しを進めるには、KYC認証を完了してください。",
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "引き出しをキャンセルしてもよろしいですか"
                    }
                }
            },
            "withdraw": {
                "title": "資産の引き出し",
                "currentlyAvailableAssets": "現在利用可能な資産",
                "selectCurrency": "通貨を選択",
                "mainnet": "メインネット",
                "withdrawalAddress": "引き出しアドレス",
                "withdrawalAddressPL": "引き出しアドレスを入力してください",
                "withdrawalAmount": "引き出し金額",
                "withdrawalAmountAllowed": "許可される金額",
                "withdrawalAmountEnter": "金額を入力",
                "all": "すべて",
                "fees": "手数料",
                "incomeTax": "所得税",
                "actualArrival": "実際の到着額",
                "confirmWithdrawal": "引き出しを確定",
                "withdrawalInstructions": "引き出しの指示",
                "withdrawalInstruction1": "到着時間：引き出し申請は1〜72時間以内に完了します。",
                "withdrawalInstruction2": "引き出し間隔：引き出しが正常に完了するたびに、24時間後に次の引き出しを開始できます。",
                "withdrawalInstruction3": "各引き出しには1 USDTの手数料がかかります。",
                "withdrawalInstruction4": "税率基準",
                "withdrawalInstruction5": "1000 USDT以上：非課税",
                "withdrawalInstruction6": "最初の引き出しが受け取られるまで、その後の引き出し申請は開始できません。",
                "withdrawalInstruction7": "最低引き出し金額：15 USDT",
                "validation": {
                    "address": {
                        "required": "引き出しアドレスは必須です"
                    },
                    "amount": {
                        "required": "引き出し金額を入力してください",
                        "invalid": "引き出し金額を入力してください",
                        "min": "最低引き出し金額は15 USDTです",
                        "max": "最高引き出し金額は50000 USDTです"
                    }
                }
            },
            "transfer": {
                "title": "送金",
                "transferSuccessfully": "送金が正常に完了しました",
                "transferCurrency": "送金通貨",
                "rechargeAndWithdraw": "チャージと引き出し",
                "balance": "残高",
                "memberPoint": "会員ポイント",
                "transferAmount": "送金額",
                "all": "すべて",
                "confirmTransfer": "送金を確定",
                "enterAmount": "送金額を入力してください",
                "validation": {
                    "amount": {
                        "required": "送金額を入力してください",
                        "invalid": "金額は必須です",
                        "min": "最低送金額は1 USDTです"
                    }
                }
            },
            "recharge": {
                "title": "資産の預け入れ",
                "selectCurrency": "通貨を選択",
                "selectNetwork": "ネットワークを選択",
                "mainnet": "メインネット",
                "saveQRcode": "QRコードを保存",
                "depositAddress": "預け入れアドレス",
                "note": "注意",
                "depositInstructions": "預け入れの指示",
                "instructions": [
                    "進める前に、暗号通貨の種類、メインネットワーク、アドレス情報が正確であることを確認してください。",
                    "最低預け入れ金額は8 USDTです。これ以下の金額は反映されません。",
                    "このアドレスにはUSDTまたはUSDC以外の資産を預け入れないでください。資金を回復できません。",
                    "アドレスは定期的に更新されるため、資金の安全を確保するために、毎回取引前に必ず最新の預け入れアドレスを取得してください。"
                ]
            },
            "unreleased": {
                "title": "未公開ポイント",
                "desc": "公開されるべき資金の説明",
                "burn": "焼却",
                "burnCause": "友達の分よりも少ない招待報酬は焼却されます",
                "friendshipLevel": "友情レベル",
                "release": "公開",
                "releaseCondition": "友達が公開できる金額以上",
                "info1": "公開されるべき資金は、現在のレベルがチームの友達のレベルより低いため、招待報酬が焼却されたものです。",
                "info2": "ユーザーがチームの友達のレベル以上になると、この部分の金額を公開できるようになります。",
                "toBeReleased": "公開されるべき割り当て"
            },
            "memberPoint": {
                "title": "会員ポイント",
                "totalAssets": "総資産",
                "assetDeposit": "資産の預け入れ",
                "assetDetails": "資産詳細"
            },
            "appDownload": {
                "title": "アプリダウンロード",
                "subtitle": "より良い体験のためにアプリをダウンロードしてください",
                "googlePlay": {
                    "label": "Google Playストアでダウンロード"
                },
                "appStore": {
                    "label": "Apple Storeでダウンロード"
                },
                "note": "注意：ダウンロードおよびインストール中に、ダウンロードの失敗、インストールパッケージの解析失敗、またはインストール例外が発生した場合は、再度ダウンロードしてインストールしてください"
            },
            "login": {
                "accountLogin": "アカウントログイン",
                "noAccountYet": "まだアカウントをお持ちではありませんか？",
                "registerNow": "今すぐ登録",
                "tabs": {
                    "username": "ユーザー名でログイン",
                    "email": "メールアドレスでログイン"
                },
                "inputs": {
                    "username": {
                        "placeholder": "ユーザー名",
                        "validation": {
                            "required": "ユーザー名は必須です",
                            "min": "ユーザー名は3文字以上でなければなりません"
                        }
                    },
                    "email": {
                        "placeholder": "Eメール",
                        "validation": {
                            "required": "メールアドレスは必須です",
                            "invalid": "無効なメールアドレス形式です"
                        }
                    },
                    "password": {
                        "label": "パスワード",
                        "placeholder": "パスワード",
                        "validation": {
                            "required": "パスワードは必須です",
                            "min": "パスワードは6文字以上でなければなりません"
                        },
                        "show": "パスワードを表示",
                        "hide": "パスワードを非表示"
                    }
                },
                "links": {
                    "forgot": "パスワードを忘れましたか？",
                    "register": {
                        "text": "アカウントがありませんか？",
                        "link": "今すぐ登録"
                    }
                },
                "buttons": {
                    "login": "ログイン"
                },
                "success": "成功",
                "terms": {
                    "validation": {
                        "required": "利用規約に同意する必要があります"
                    }
                },
                "errors": {
                    "userNotFound": "ユーザーが見つかりません",
                    "wrongPassword": "パスワードが正しくありません"
                }
            },
            "register": {
                "title": "登録",
                "accountRegistration": "アカウント登録",
                "alreadyHaveAccount": "すでにアカウントをお持ちですか？",
                "loginNow": "今すぐログイン",
                "inputs": {
                    "username": {
                        "placeholder": "ユーザー名",
                        "validation": {
                            "required": "ユーザー名は必須です",
                            "min": "ユーザー名は5文字以上でなければなりません",
                            "matches": "ユーザー名は文字で始まり、文字、数字、'_'または'.'のみを含めることができ、特殊文字や数字で始めたり終わったりすることはできません。"
                        }
                    },
                    "email": {
                        "placeholder": "メールアドレス",
                        "validation": {
                            "required": "メールアドレスは必須です",
                            "invalid": "無効なメールアドレス形式です"
                        }
                    },
                    "phone": {
                        "placeholder": "携帯電話番号",
                        "validation": {
                            "required": "電話番号は必須です",
                            "digits": "電話番号は数字のみを含める必要があります"
                        }
                    },
                    "password": {
                        "placeholder": "ログインパスワード",
                        "validation": {
                            "required": "パスワードは必須です",
                            "min": "パスワードは6文字以上でなければなりません"
                        }
                    },
                    "confirmPassword": {
                        "placeholder": "パスワードを確定",
                        "validation": {
                            "required": "パスワードを確認してください",
                            "match": "パスワードが一致しません"
                        }
                    },
                    "invitationCode": {
                        "placeholder": "招待コード",
                        "validation": {
                            "required": "招待コードは必須です"
                        }
                    }
                },
                "errors": {
                    "emailTaken": "このメールアドレスはすでに使用されています",
                    "usernameTaken": "このユーザー名はすでに使用されています",
                    "invalidReferral": "無効な紹介コードです"
                },
                "buttons": {
                    "register": "登録"
                },
                "terms": {
                    "validation": {
                        "required": "利用規約に同意する必要があります"
                    }
                },
                "links": {
                    "login": {
                        "text": "すでにアカウントをお持ちですか？",
                        "link": "今すぐログイン"
                    }
                },
                "success": "登録が正常に完了しました",
                "countrySelector": {
                    "title": "国を選択"
                }
            },
            "terms": {
                "part1": "英国に所在するアカウントで続行することにより、当社の",
                "part2": "利用規約",
                "part3": "に同意し、当社の",
                "part4": "プライバシーポリシー",
                "title": "Eternova Filmsプライバシーポリシー"
            },
            "areaCode": {
                "label": "市外局番を選択"
            },
            "forgetPassword": {
                "title": "パスワードを忘れた場合",
                "inputs": {
                    "email": {
                        "label": "Eメール",
                        "placeholder": "あなたのメールアドレス",
                        "validation": {
                            "required": "メールアドレスは必須です",
                            "invalid": "無効なメールアドレス形式です"
                        }
                    },
                    "verificationCode": {
                        "label": "認証コード",
                        "placeholder": "認証コードを入力してください",
                        "validation": {
                            "required": "認証コードは必須です"
                        },
                        "button": "認証コードを取得"
                    },
                    "newPassword": {
                        "label": "新しいパスワード",
                        "placeholder": "新しいパスワードを入力してください",
                        "validation": {
                            "required": "新しいパスワードは必須です",
                            "min": "パスワードは6文字以上でなければなりません"
                        },
                        "show": "パスワードを表示",
                        "hide": "パスワードを非表示"
                    }
                },
                "buttons": {
                    "reset": "リセット"
                },
                "alerts": {
                    "emailRequired": "有効なメールアドレスを入力してください",
                    "codeSent": "認証コードがメールアドレスに送信されました",
                    "sendError": "コードの送信に失敗しました",
                    "restSuccess": "パスワードが正常にリセットされました。ログインしてください。",
                    "emailNotFound": "メールアドレスが見つかりません",
                    "codeExpired": "コードの有効期限が切れました"
                }
            },
            "verifyFundsPassword": {
                "title": "資金パスワードの認証",
                "inputs": {
                    "fundsPassword": {
                        "label": "資金パスワード",
                        "placeholder": "資金パスワードを入力",
                        "validation": {
                            "required": "資金パスワードは必須です",
                            "matches": "資金パスワードは6桁でなければなりません"
                        }
                    }
                },
                "buttons": {
                    "verify": "認証"
                },
                "alerts": {
                    "noFundsPassword": "取引パスワードを紐付けてください",
                    "checkError": "資金パスワードの確認中にエラーが発生しました",
                    "purchaseSuccess": "パッケージの購入が正常に完了しました",
                    "withdrawalSuccess": "引き出しリクエストが正常に完了しました",
                    "insufficientBalance": "残高不足です",
                    "transferToTask": "引き出し残高を会員ポイントに送金してください",
                    "invalidPurchase": "無効な購入開始です",
                    "incorrectPassword": "資金パスワードが正しくありません",
                    "purchaseError": "購入中にエラーが発生しました",
                    "wait48Hours": "資金パスワードを変更してから48時間後に引き出しが可能です",
                    "unauthorizedRequest": "不正なリクエストです",
                    "generalError": "エラーが発生しました。後でもう一度お試しください",
                    "tooManyAttempts": "試行回数が多すぎます。後でもう一度お試しください"
                }
            },
            "setFundsPassword": {
                "title": "資金パスワードの設定",
                "inputs": {
                    "fundsPassword": {
                        "label": "資金パスワード",
                        "placeholder": "資金パスワードを設定",
                        "validation": {
                            "required": "資金パスワードは必須です",
                            "matches": "資金パスワードは6桁でなければなりません"
                        }
                    },
                    "confirmPassword": {
                        "label": "資金パスワードを確定",
                        "placeholder": "資金パスワードを確定",
                        "validation": {
                            "required": "資金パスワードを確認してください",
                            "matches": "パスワードが一致しません"
                        }
                    }
                },
                "buttons": {
                    "save": "保存"
                },
                "alerts": {
                    "success": "資金パスワードが正常に設定されました",
                    "error": "資金パスワードの設定中にエラーが発生しました"
                }
            },
            "lang": {
                "title": "言語を切り替える"
            },
            "reels": {
                "missionAreaLabel": "ミッションエリア",
                "errors": {
                    "selectValidPackage": "VIPミッションを選択してください",
                    "dailyLimitReached": "上限に達しました",
                    "notPurchased": "パッケージが見つかりません",
                    "packageExpired": "パッケージの有効期限が切れました",
                    "alreadyLiked": "すでに視聴済みです"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "VIPミッションエリア"
                    }
                }
            },
            "agentPromotion": {
                "title": "代理店プロモーションシステム",
                "teamSize": "チーム規模",
                "nextStageTeamSize": "次のステージのチーム規模",
                "nextStageGroupPromotionReward": "次のステージのグループプロモーション報酬",
                "taskList": "タスクリスト",
                "firstGenInvite": "第一世代メンバーを招待",
                "secondGenInvite": "第二世代メンバーを招待",
                "thirdGenInvite": "第三世代メンバーを招待",
                "lastWeekIncrease": "先週の増加",
                "thisWeekIncrease": "今週の増加",
                "available": "利用可能",
                "receiveBtn": "受け取る",
                "levels": {
                    "beginnerCreator": "ビギナークリエイター",
                    "skilledSpecialist": "熟練スペシャリスト",
                    "seniorSpecialist": "シニアスペシャリスト",
                    "supervisor": "スーパーバイザー",
                    "seniorSupervisor": "シニアスーパーバイザー",
                    "regionalManager": "地域マネージャー",
                    "seniorManager": "シニアマネージャー"
                }
            },
            "addressList": {
                "title": "アドレスリスト",
                "addAddressBtn": "アドレスを追加",
                "bidingAddress": {
                    "title": "アドレスの紐付け",
                    "inputs": {
                        "rechrageChannel": {
                            "label": "チャネル",
                        },
                        "mainnet": {
                            "label": "メインネット",
                        },
                        "address": {
                            "label": "アドレス",
                            "placeholder": "アドレスを入力してください",
                            "validation": {
                                "required": "アドレスは空にできません"
                            }
                        }
                    },
                    "errors": {
                        "invalidAddress": "アドレスが無効です。正しい{{currency}}-{{network}}アドレスを入力してください",
                        "singleAddressLimit": "紐付けできるアドレスは1つのみです。変更が必要な場合はカスタマーサービスに連絡してください",
                        "addressAlreadyExists": "このアドレスはすでに存在します。再度追加しないでください"
                    },
                    "successBound": "アドレスが正常に紐付けられました"
                },
                "pleaseSelectAddress": "アドレスを選択してください",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "このアドレスは既に使用中です。変更が必要な場合はカスタマーサービスに連絡してください。"
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "注意"
                },
                "content": {
                    "deleteAddress": {
                        "main": "アドレスを削除してもよろしいですか"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "「いいね」はできません",
                "subscribe": "チャンネル登録",
                "subscribed": "チャンネル登録済み",
                "subscribing": "チャンネル登録中",
                "views": "回視聴",
                "explore": "探索"
            },
            "shortsRevenue": {
                "title": "ショート動画"
            },
            "telegram": {
                "title": "公式Telegram",
                "joinGroup": "Telegramグループに参加",
                "claimReward": "4 USDTを受け取る",
                "inputs": {
                    "username": {
                        "label": "Telegramユーザー名",
                        "placeholder": "Telegramユーザー名を入力してください",
                        "validation": {
                            "required": "Telegramユーザー名は必須です"
                        }
                    }
                },
                "rewardInstructions": "グループ参加報酬の指示",
                "rewardInstruction1": "グループ参加報酬を申請するには、Telegramユーザー名を使用してください。",
                "rewardInstruction2": "新規アカウントのみが報酬を受け取る資格があります。すでに受け取っているアカウントは、グループ参加報酬の対象外です。",
                "rewardStatuses": {
                    "pendingReview": "すでに申請済みです。管理者が報酬を送信するまでお待ちください。",
                    "alreadyClaimed": "報酬はすでに受け取り済みです。",
                    "pendingReviewGr": "グループ参加報酬は審査中です。管理者がリクエストを審査している間に、グループに参加していることを確認してください。",
                    "notInGroup": "入力されたTelegramユーザー名はグループにいません。もう一度申請してください。グループに参加していること、およびTelegramユーザー名が正しいことを確認してください。",
                    "userNameUsed": "Telegramユーザー名は既に使用されています。これが間違っていると思われる場合は、カスタマーサービスに連絡してください。"
                }
            },
            "missionsCenter": {
                "title": "タスクリスト",
                "direct": "ダイレクトタスク",
                "team": "チームタスク",
                "growth": "成長タスク",
                "progress": "進捗",
                "added": "収集する数：<span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "受け取り済み",
                "isClaiming": "受け取り中",
                "inProgress": "進行中",
                "claimReward": "受け取る",
                "addDirectActiveMembers": "第一世代のメンバーがVIPパッケージを購読するよう{{count}}人を正常に招待すると、{{reward}} USDTを獲得できます",
                "addTeamMembers": "第二世代と第三世代のVIP1以上の購読者が合計{{count}}人に達すると、{{reward}} USDTを獲得できます",
                "addGrowthMembers": "合計アクティブメンバーを{{count}}人追加",
                "rewardClaimed": "報酬が正常に受け取られました",
                "claimFailed": "報酬の受け取りに失敗しました"
            }

        }
    },
    ru: {
        translation: {
            "global": {
                "copySuccess": "Скопировано",
                "days": "Дней",
                "insufficientBalance": "Недостаточно средств",
                "wait48hrs": "Пожалуйста, подождите 48 часов после смены пароля для вывода средств",
                "pleaseEnter": "Пожалуйста, введите",
                "save": "Сохранить",
                "ok": "ОК",
                "error": {
                    "invalidCode": "Неверный код подтверждения",
                    "tryAgain": "Что-то пошло не так, попробуйте снова позже"
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
                "ongoingWithdrawal": "Можно обработать только один запрос на вывод средств одновременно",
                "waitAfterSuccessWithdraw": "Последующие запросы на вывод средств должны быть сделаны через 24 часа после завершения предыдущего вывода",
                "waitAfterCanceledWithdraw": "Пожалуйста, подождите 24 часа после отмены вывода средств, прежде чем запрашивать новый",
                "todaysEarnings": "Доход за сегодня",
                "cumulativeEarnings": "Совокупный доход",
                "myLevel": "Мой уровень",
                "upgrade": "Повысить уровень",
                "success": "успешно",
                "stayTuned": "Оставайтесь на связи",
                "months": {
                    "jan": "Янв",
                    "feb": "Фев",
                    "mar": "Мар",
                    "apr": "Апр",
                    "may": "Май",
                    "jun": "Июн",
                    "jul": "Июл",
                    "aug": "Авг",
                    "sep": "Сен",
                    "oct": "Окт",
                    "nov": "Ноя",
                    "dec": "Дек"
                },
                "people": "Человек",
                "views": "Просмотры",
                "dontRepeat": "Пожалуйста, не повторяйте запрос",
                "sending": "Отправка",

                "cancel": "Отмена",
                "confirm": "Подтвердить",
                "selectCategory": "Выбрать категорию"

            },
            "common": {
                "errorOccurred": "Произошла ошибка"
            },
            "bottomBar": {
                "home": "Главная",
                "team": "Команда",
                "revenue": "Доход",
                "record": "Музыка",
                "mine": "Мой"
            },
            "home": {
                "viral": "Короткие видео",
                "tredningNow": "Популярные фильмы",
                "seeMore": "Посмотреть еще",
                "aboutUs": "О нас",
                "help": "Помощь",
                "missionCenter": "Центр миссий",
                "bonusDescription": "Описание бонуса",
                "socialMedia": "Социальные сети",
                "joinUs": "Присоединяйтесь к официальной группе Eternova Films в Telegram и получите 1 USDT в качестве награды.",
                "leader": "Eternova Films Городской партнер",
                "home": "Главная",
                "forYou": "Для вас",
                "inviteFriends": "Пригласить друзей",
                "inviteFriendsText": "Приглашайте друзей, чтобы зарабатывать",
                "annoucments": [
                    "Добро пожаловать в Eternova Films! Создавайте, делитесь и зарабатывайте на своих коротких видео."
                ]
            },
            "about": {
                "title": "О компании"
            },
            "notices": {
                "title": "Уведомления",
                "translation": {
                    "eternovafilms_open": {
                        "title": "Добро пожаловать в Eternova Films",
                        "content": "Мы рады, что вы присоединились к нашему сообществу. Eternova Films — это больше, чем просто платформа. Это сцена, где вместе сияют кино, музыка и творчество. Здесь вы откроете для себя сильные истории, незабываемые выступления и возможности для роста вместе с мировой аудиторией мечтателей и творцов. Независимо от того, пришли ли вы сюда, чтобы насладиться фильмами, открыть для себя музыку или принять участие в новых проектах, ваше путешествие начинается сейчас. Спасибо, что вошли в этот мир вместе с нами — мы вместе строим что-то вечное. Присоединяйтесь к официальной группе в Telegram и получите свою награду в 1 USDT уже сегодня!"
                    }
                }
            },
            "help": {
                "title": "Центр помощи",
                "translation": {
                    "how_to_recharge": {
                        "title": "Как пополнить счет",
                        "content": "Откройте 'Мой' в нижней панели. Перейдите в 'Пополнить & Вывести' → 'Пополнить'. Выберите валюту и сеть, затем скопируйте адрес для пополнения."
                    },
                    "how_to_do_task_movie": {
                        "title": "Как выполнить задание с фильмом",
                        "content": "Откройте 'Доход'. Найдите ваш пакет, нажмите 'Оценка', чтобы получить доход, выберите видео, затем поставьте 'лайк'."
                    },
                    "how_to_do_task_music": {
                        "title": "Как выполнить задание с музыкой",
                        "content": "Откройте 'Музыка'. Найдите ваш пакет, нажмите 'Оценка', чтобы получить доход, выберите видео, затем поставьте 'лайк'."
                    },
                    "how_to_withdraw": {
                        "title": "Как вывести средства",
                        "content": "Откройте 'Мой' → 'Пополнить & Вывести' → 'Вывести'. Выберите валюту и сеть, выберите сохраненный адрес, введите сумму, нажмите 'Подтвердить вывод', затем подтвердите с помощью вашего пароля для транзакций."
                    },
                    "how_to_invite_friends": {
                        "title": "Как пригласить друзей",
                        "content": "Перейдите в 'Команда' → 'Пригласить друга'. Нажмите 'Копировать', чтобы скопировать свой код приглашения."
                    },
                    "how_to_register": {
                        "title": "Как зарегистрироваться",
                        "content": "На странице регистрации: введите имя пользователя и email, выберите код страны телефона, введите номер телефона, создайте и подтвердите пароль, добавьте код приглашения, затем нажмите стрелку 'Зарегистрироваться'."
                    },
                    "how_to_purchase_package_long": {
                        "title": "Как приобрести пакет (раздел 'Длинные видео')",
                        "content": "Откройте 'VIP', выберите пакет, затем нажмите 'Разблокировать сейчас'."
                    },
                    "how_to_purchase_package_shorts": {
                        "title": "Как приобрести пакет (раздел 'Короткие видео')",
                        "content": "Откройте 'Короткие видео', выберите пакет, затем нажмите 'Разблокировать сейчас'."
                    },
                    "how_to_transfer_funds": {
                        "title": "Как перевести средства из 'Пополнить & Вывести' в 'Баллы участника'",
                        "content": "Откройте 'Мой' → 'Пополнить & Вывести'. Нажмите на значок перевода (вверху справа), выберите валюту, введите сумму, затем нажмите 'Подтвердить перевод'."
                    },
                    "how_to_reset_password": {
                        "title": "Как сбросить пароль",
                        "content": "На экране входа в систему нажмите 'Забыли пароль'. Введите свой email, нажмите 'Получить код подтверждения', введите код из вашего email, установите новый пароль, затем нажмите 'ОК'."
                    },
                    "how_to_change_password": {
                        "title": "Как изменить пароль",
                        "content": "Откройте 'Мой' → 'Пароль для входа'. Введите свой email, нажмите 'Получить код подтверждения', введите код, установите и подтвердите свой новый пароль, затем нажмите 'ОК'."
                    },
                    "how_to_set_funding_password": {
                        "title": "Как установить пароль для транзакций",
                        "content": "Откройте 'Мой' → 'Пароль для транзакций'. Введите свой email, нажмите 'Получить код подтверждения', введите код, установите и подтвердите свой пароль для транзакций, затем нажмите 'ОК'."
                    },
                    "how_to_bind_withdraw_address": {
                        "title": "Как привязать адрес для вывода средств",
                        "content": "Откройте 'Мой' → 'Пополнить & Вывести'. Откройте список адресов → 'Добавить адрес'. Выберите канал и сеть, введите свой адрес для вывода, подтвердите с помощью кода из email, затем нажмите 'ОК'."
                    },
                    "how_to_protect_my_account": {
                        "title": "Как защитить мой аккаунт",
                        "content": "Откройте 'Мой' → 'KYC пользователя'. Введите национальность и настоящее имя, выберите тип документа, заполните номер документа, загрузите документы, затем нажмите 'Отправить на проверку'."
                    }
                }
            },
            "helpDetails": {
                "title": "Руководство"
            },
            "introduction": {
                "title": "Объяснение дохода"
            },
            "social": {
                "title": "Социальные сети Eternova Films",
                "offical": "Социальные сети",
                "officalTGChannel": "Официальный канал в Telegram",
                "officalTGGroup": "Официальная группа в Telegram",
                "subscribers": "подписчики",
                "join": "Присоединиться",
                "officalIG": "Официальный профиль в Instagram",
                "follow": "Подписаться",
                "followers": "подписчики",
                "community": "Сообщество",
                "members": "участники",
                "new": "Новое",
                "errorRegion": "Пожалуйста, приобретите пакет для доступа к этой группе."
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
                        "title": "Подача заявки на вывод средств",
                        "message": "Вы подали заявку на вывод USDT, пожалуйста, дождитесь одобрения, номер заказа: {{order_number}}, сумма: {{amount}}, комиссия: {{fee}} USDT"
                    },
                    "withdrawal_approve": {
                        "title": "Вывод средств завершен",
                        "message": "Ваш вывод средств завершен, номер заказа: {{order_number}}, сумма: {{amount}}, комиссия: {{fee}} USDT"
                    },
                    "kyc_submitted": {
                        "title": "KYC отправлен",
                        "message": "Ваш KYC был отправлен на проверку"
                    },
                    "kyc_approved": {
                        "title": "KYC одобрен",
                        "message": "Ваш KYC был одобрен"
                    },
                    "kyc_rejected": {
                        "title": "KYC отклонен",
                        "message": "Ваш KYC был отклонен"
                    }
                }
            },
            "notificationDetails": {
                "title": "Уведомление"
            },
            "team": {
                "title": "Команда",
                "benefitAnalysis": "Анализ выгоды",
                "investmentIncome": "Инвестиционный доход",
                "teamMemberListBtn": "Список участников команды",
                "inviteFriend": "Пригласить друга",
                "inviteFriendInfo": "Смотрите фильмы, чтобы начать зарабатывать",
                "totalIncome": "Общий доход пользователей",
                "todayIncome": "Доход за сегодня",
                "todayInc": "Сегодня",
                "teamTotal": "Общая сумма подписок команды",
                "likesIncome": "Доход от лайков",
                "teamIncome": "Доход команды",
                "totalReturn": "Общая прибыль",
                "totalTeamMembers": "Всего участников команды",
                "addedToday": "Добавлено сегодня",
                "firstGeneration": "Первое поколение",
                "totalMembers": "Всего участников",
                "totalActiveMembers": "Активные",
                "genTotalIncome": "Общий доход",
                "secondGeneration": "Второе поколение",
                "thirdGeneration": "Третье поколение",
                "fourthGeneration": "Четвертое поколение",
                "fifthGeneration": "Пятое поколение",
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
                "headline": "Смотрите фильмы, чтобы начать зарабатывать",
                "invitationLink": "Ссылка для приглашения",
                "invitationCode": "Код приглашения"
            },
            "revenueMusic": {
                "title": "Музыкальный центр участника"
            },
            "revenue": {
                "title": "Центр участника",
                "score": {
                    "title": "Центр оценки",
                    "type": "Тип",
                    "director": "Режиссер",
                    "introduction": "Вступление",
                    "recommendations": "Связанные рекомендации",
                    "categories": {
                        "upcoming_movies": "Будущий фильм",
                        "popular_movies": "Популярный фильм"
                    },
                    "watch": "Смотреть"
                },
                "specialPackage": "Специальные пакеты",
                "currentlevel": "Текущий уровень",
                "todayEarning": "Доход за сегодня",
                "cumulativeEarning": "Совокупный доход",
                "package": {
                    "view": "Просмотр",
                    "dailyPerView": "Ежедневные просмотры",
                    "validTime": "Срок действия",
                    "perViewIncome": "Доход за просмотр",
                    "scoreBtn": "Оценить, чтобы получить доход",
                    "openSoon": "Скоро откроется",
                    "stayTuned": "Оставайтесь на связи",
                    "unlockNow": "Разблокировать сейчас",
                    "expired": "Срок действия пакета истек",
                    "expiresIn": "Срок действия истекает через",
                    "totalReturn": "Общая прибыль",
                    "dailyReturn": "Ежедневная прибыль"
                },
                "packageDetails": "Подробности",
                "packageExplain": "Описание пакетов",
                "buy": {
                    "modal": {
                        "text": "Пожалуйста, подтвердите, что вы хотите завершить эту покупку"
                    }
                }
            },
            "record": {
                "title": "Запись",
                "viewRating": "Просмотр рейтинга",
                "viewEarnings": "Просмотр заработка",
                "noMoreRecords": "Больше нет записей"
            },
            "profile": {
                "ofcWeb": "Официальный сайт",
                "partner": "Eternova Films Партнерская программа",
                "officalWebsite": "Ссылка на официальный сайт",
                "instagramAccount": "Аккаунт в Instagram",
                "userKYC": "Верификация пользователя",
                "telegram": "Telegram",
                "scoreRecord": "История оценок",
                "loginPasswordTab": "Пароль для входа",
                "transactionPasswordTab": "Пароль для транзакций",
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
                    "nickname": "Псевдоним",
                    "enterNickname": "Введите ваш псевдоним",
                    "gender": "Пол",
                    "male": "мужской",
                    "female": "женский",
                    "validation": {
                        "nickname": {
                            "required": "Псевдоним обязателен"
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
                    "title": "Верифицировано",
                    "errorPassport1": "Пожалуйста, загрузите лицевую сторону паспорта",
                    "errorPassport2": "Пожалуйста, загрузите селфи с вашим паспортом",
                    "errorID1": "Пожалуйста, загрузите лицевую сторону удостоверения личности",
                    "errorID2": "Пожалуйста, загрузите обратную сторону удостоверения личности",
                    "errorID3": "Пожалуйста, загрузите селфи с вашим удостоверением личности",
                    "successMsg": "KYC успешно отправлен на проверку",
                    "errorMsg": "Не удалось отправить KYC, пожалуйста, попробуйте снова",
                    "inputs": {
                        "nationality": {
                            "label": "Гражданство",
                            "placeholder": "Пожалуйста, введите гражданство",
                            "validation": {
                                "required": "Гражданство обязательно"
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
                            "placeholder": "Пожалуйста, введите номер удостоверения личности",
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
                    "actionButton": "Отправить на проверку",
                    "kycVerified": "Ваша информация была проверена и верифицирована. Ваши личные данные были немедленно удалены. Профиль снова активен. Спасибо за сотрудничество.",
                    "alreadySubmited": "Вы уже отправили заявку. Пожалуйста, дождитесь завершения процесса проверки",
                    "underReview": "Ваш запрос на верификацию находится на рассмотрении",
                    "verified": "Ваша верификация KYC завершена. Ваши документы приняты.",
                    "rejected": "Верификация KYC не удалась. Пожалуйста, отправьте документы повторно."
                },
                "loginPassword": {
                    "title": "Пароль для входа",
                    "codeSent": "Код подтверждения успешно отправлен",
                    "changedSuccess": "Пароль успешно изменен",
                    "inputs": {
                        "email": {
                            "label": "Адрес электронной почты",
                            "placeholder": "Email"
                        },
                        "verifyCode": {
                            "label": "Код подтверждения",
                            "placeholder": "Пожалуйста, введите код подтверждения",
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
                            "placeholder": "Повторите пароль для подтверждения",
                            "validation": {
                                "required": "Пожалуйста, подтвердите ваш пароль",
                                "oneOf": "Пароли должны совпадать"
                            }
                        }
                    }
                },
                "fundsPassword": {
                    "title": "Пароль для транзакций",
                    "codeSent": "Код подтверждения успешно отправлен",
                    "changedSuccess": "Пароль для транзакций успешно изменен",
                    "changedSuccessBind": "Пароль для транзакций успешно привязан",
                    "inputs": {
                        "email": {
                            "label": "Адрес электронной почты",
                            "placeholder": "Email"
                        },
                        "verifyCode": {
                            "label": "Код подтверждения",
                            "placeholder": "Пожалуйста, введите код подтверждения",
                            "sendBtn": "Отправить",
                            "validation": {
                                "required": "Код подтверждения обязателен"
                            }
                        },
                        "newPassword": {
                            "label": "Пароль для транзакций",
                            "placeholder": "6-значная комбинация",
                            "validation": {
                                "required": "Новый пароль для транзакций обязателен",
                                "matches": "Пароль для транзакций должен состоять ровно из 6 цифр"
                            }
                        },
                        "confirmPassword": {
                            "placeholder": "Повторите пароль для подтверждения",
                            "validation": {
                                "required": "Пожалуйста, подтвердите ваш пароль",
                                "oneOf": "Пароли должны совпадать"
                            }
                        }
                    },
                    "reminder": {
                        "title": "Важное напоминание",
                        "points": {
                            "point1": "Ваш пароль для транзакций используется для операций, вывода средств и настроек безопасности аккаунта. Рекомендуется, чтобы он не совпадал с паролем для входа. В случае кражи аккаунта, сайт не несет ответственности.",
                            "point2": "После смены пароля для транзакций вы не сможете выводить деньги в течение 48 часов"
                        }
                    }
                }
            },
            "wallet": {
                "title": "Пополнить и вывести",
                "totalAssets": "Всего активов",
                "recharge": "Пополнить",
                "withdraw": "Вывести",
                "transfer": "Перевести",
                "assetDetails": "Детали активов",
                "cancelWithdrawal": "Отменить вывод средств",
                "addresses": "Адреса",
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
                    "processing": "В обработке",
                    "userCancel": "Отменено пользователем",
                    "scheduled": "Запланировано",
                    "shouldArriveBy": "Должно прийти до",
                    "requiresAction": "Требуется внимание",
                    "requiresActionContact": "Пожалуйста, пройдите верификацию KYC для продолжения вывода средств."
                },
                "cancelWithdrawalModal": {
                    "modal": {
                        "text": "Вы уверены, что хотите отменить вывод средств?"
                    }
                }
            },
            "withdraw": {
                "title": "Вывод активов",
                "currentlyAvailableAssets": "Доступные активы",
                "selectCurrency": "Выберите валюту",
                "mainnet": "Основная сеть",
                "withdrawalAddress": "Адрес для вывода",
                "withdrawalAddressPL": "Пожалуйста, введите адрес для вывода",
                "withdrawalAmount": "Сумма для вывода",
                "withdrawalAmountAllowed": "Разрешенная сумма между",
                "withdrawalAmountEnter": "Введите сумму",
                "all": "Вся сумма",
                "fees": "Комиссия",
                "incomeTax": "Подоходный налог",
                "actualArrival": "Фактическое поступление",
                "confirmWithdrawal": "Подтвердить вывод",
                "withdrawalInstructions": "Инструкции по выводу",
                "withdrawalInstruction1": "Время поступления: Заявка на вывод будет выполнена в течение 1-72 часов.",
                "withdrawalInstruction2": "Интервал между выводами: Запрос на следующий вывод средств можно отправить только через 24 часа после успешного завершения предыдущего.",
                "withdrawalInstruction3": "За каждый вывод взимается комиссия в размере 1 USDT.",
                "withdrawalInstruction4": "Стандарт налогообложения",
                "withdrawalInstruction5": "1000 USDT и выше: без налога",
                "withdrawalInstruction6": "Последующие заявки на вывод не могут быть инициированы до получения первого вывода.",
                "withdrawalInstruction7": "Минимальная сумма вывода: 15 USDT.",
                "validation": {
                    "address": {
                        "required": "Адрес для вывода обязателен"
                    },
                    "amount": {
                        "required": "Пожалуйста, введите сумму для вывода",
                        "invalid": "Пожалуйста, введите сумму для вывода",
                        "min": "Минимальная сумма вывода 15 USDT",
                        "max": "Максимальная сумма вывода 50000 USDT"
                    }
                }
            },
            "transfer": {
                "title": "Перевод",
                "transferSuccessfully": "Перевод успешно завершен",
                "transferCurrency": "Валюта перевода",
                "rechargeAndWithdraw": "Пополнить и вывести",
                "balance": "Баланс",
                "memberPoint": "Баллы участника",
                "transferAmount": "Сумма перевода",
                "all": "вся сумма",
                "confirmTransfer": "Подтвердить перевод",
                "enterAmount": "Пожалуйста, введите сумму перевода",
                "validation": {
                    "amount": {
                        "required": "Пожалуйста, введите сумму перевода",
                        "invalid": "Сумма обязательна",
                        "min": "Минимальная сумма перевода 1 USDT"
                    }
                }
            },
            "recharge": {
                "title": "Пополнение активов",
                "selectCurrency": "Выберите валюту",
                "selectNetwork": "Выберите сеть",
                "mainnet": "Основная сеть",
                "saveQRcode": "Сохранить QR-код",
                "depositAddress": "Адрес для пополнения",
                "note": "Примечание",
                "depositInstructions": "Инструкции по пополнению",
                "instructions": [
                    "Прежде чем продолжить, убедитесь, что тип вашей криптовалюты, основная сеть и информация об адресе верны.",
                    "Минимальная сумма пополнения составляет 8 USDT; пополнения на меньшую сумму не будут зачислены.",
                    "Не отправляйте на этот адрес активы, отличные от USDT или USDC, так как средства не могут быть возвращены.",
                    "Всегда получайте последний адрес для пополнения перед каждой транзакцией, чтобы обеспечить безопасность средств, так как адреса периодически обновляются."
                ]
            },
            "unreleased": {
                "title": "Баллы к выпуску",
                "desc": "Описание средств к выпуску",
                "burn": "Сгорание",
                "burnCause": "Вознаграждения за приглашения ниже уровня друга приведут к сгоранию",
                "friendshipLevel": "Уровень дружбы",
                "release": "Выпуск",
                "releaseCondition": "Равен или выше суммы, которая может быть выпущена друзьями",
                "info1": "Средства к выпуску находятся в таком состоянии, потому что текущий уровень ниже уровня друзей в команде, и вознаграждение за приглашение сгорело.",
                "info2": "Когда пользователь повысит свой уровень до равного или выше уровня друга в команде, он сможет получить эту часть суммы к выпуску.",
                "toBeReleased": "Квота к выпуску"
            },
            "memberPoint": {
                "title": "Баллы участника",
                "totalAssets": "Всего активов",
                "assetDeposit": "Пополнение активов",
                "assetDetails": "Детали активов"
            },
            "appDownload": {
                "title": "Скачать приложение",
                "subtitle": "Скачайте приложение для лучшего опыта",
                "googlePlay": {
                    "label": "Скачать в Google Play Store"
                },
                "appStore": {
                    "label": "Скачать в Apple Store"
                },
                "note": "Примечание: Если в процессе загрузки и установки произошел сбой загрузки, сбой при анализе установочного пакета или ошибка установки, пожалуйста, загрузите и установите приложение снова"
            },
            "login": {
                "accountLogin": "Вход в аккаунт",
                "noAccountYet": "Еще нет аккаунта?",
                "registerNow": "Зарегистрироваться сейчас",
                "tabs": {
                    "username": "Вход по имени пользователя",
                    "email": "Вход по email"
                },
                "inputs": {
                    "username": {
                        "placeholder": "Имя пользователя",
                        "validation": {
                            "required": "Имя пользователя обязательно",
                            "min": "Имя пользователя должно состоять минимум из 3 символов"
                        }
                    },
                    "email": {
                        "placeholder": "Электронная почта",
                        "validation": {
                            "required": "Email обязателен",
                            "invalid": "Неверный формат email"
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
                        "required": "Вы должны принять условия и положения"
                    }
                },
                "errors": {
                    "userNotFound": "Пользователь не найден",
                    "wrongPassword": "Неверный пароль"
                }
            },
            "register": {
                "title": "Регистрация",
                "accountRegistration": "Регистрация аккаунта",
                "alreadyHaveAccount": "Уже есть аккаунт?",
                "loginNow": "Войти сейчас",
                "inputs": {
                    "username": {
                        "placeholder": "Имя пользователя",
                        "validation": {
                            "required": "Имя пользователя обязательно",
                            "min": "Имя пользователя должно содержать не менее 5 символов",
                            "matches": "Имя пользователя должно начинаться с буквы, может содержать только буквы, цифры, символы '_' или '.', и не может начинаться или заканчиваться специальным символом или цифрой."
                        }
                    },
                    "email": {
                        "placeholder": "Адрес электронной почты",
                        "validation": {
                            "required": "Email обязателен",
                            "invalid": "Неверный формат email"
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
                        "placeholder": "Подтвердите пароль",
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
                    "emailTaken": "Email уже используется",
                    "usernameTaken": "Имя пользователя уже используется",
                    "invalidReferral": "Неверный реферальный код"
                },
                "buttons": {
                    "register": "Зарегистрироваться"
                },
                "terms": {
                    "validation": {
                        "required": "Вы должны принять условия и положения"
                    }
                },
                "links": {
                    "login": {
                        "text": "Уже есть аккаунт?",
                        "link": "Войти сейчас"
                    }
                },
                "success": "Успешная регистрация",
                "countrySelector": {
                    "title": "Выберите страну"
                }
            },
            "terms": {
                "part1": "Продолжая использовать аккаунт, находящийся в Великобритании, вы соглашаетесь с нашими",
                "part2": "Условиями обслуживания",
                "part3": "и подтверждаете, что ознакомились с нашей",
                "part4": "Политикой конфиденциальности.",
                "title": "Политика конфиденциальности Eternova Films"
            },
            "areaCode": {
                "label": "Выберите код региона"
            },
            "forgetPassword": {
                "title": "Забыли пароль",
                "inputs": {
                    "email": {
                        "label": "E-MAIL",
                        "placeholder": "Ваш email",
                        "validation": {
                            "required": "Email обязателен",
                            "invalid": "Неверный формат email"
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
                    "emailRequired": "Пожалуйста, введите действительный email",
                    "codeSent": "Код подтверждения отправлен на ваш email",
                    "sendError": "Не удалось отправить код",
                    "restSuccess": "Пароль успешно сброшен. Пожалуйста, войдите в систему.",
                    "emailNotFound": "Email не найден",
                    "codeExpired": "Срок действия кода истек"
                }
            },
            "verifyFundsPassword": {
                "title": "Подтверждение пароля для транзакций",
                "inputs": {
                    "fundsPassword": {
                        "label": "Пароль для транзакций",
                        "placeholder": "Введите пароль для транзакций",
                        "validation": {
                            "required": "Пароль для транзакций обязателен",
                            "matches": "Пароль для транзакций должен состоять ровно из 6 цифр"
                        }
                    }
                },
                "buttons": {
                    "verify": "Подтвердить"
                },
                "alerts": {
                    "noFundsPassword": "Пожалуйста, привяжите пароль для транзакций",
                    "checkError": "Произошла ошибка при проверке пароля для транзакций",
                    "purchaseSuccess": "Пакет успешно приобретен",
                    "withdrawalSuccess": "Запрос на вывод успешно отправлен",
                    "insufficientBalance": "Недостаточно средств",
                    "transferToTask": "Пожалуйста, переведите ваш баланс с вывода на баллы участника",
                    "invalidPurchase": "Неверная инициация покупки",
                    "incorrectPassword": "Неверный пароль для транзакций",
                    "purchaseError": "Произошла ошибка во время покупки",
                    "wait48Hours": "Пожалуйста, подождите 48 часов после смены пароля для транзакций, чтобы вывести средства",
                    "unauthorizedRequest": "Неавторизованный запрос",
                    "generalError": "Произошла ошибка, попробуйте снова позже",
                    "tooManyAttempts": "Слишком много попыток, попробуйте снова позже"
                }
            },
            "setFundsPassword": {
                "title": "Установить пароль для транзакций",
                "inputs": {
                    "fundsPassword": {
                        "label": "Пароль для транзакций",
                        "placeholder": "Установите пароль для транзакций",
                        "validation": {
                            "required": "Пароль для транзакций обязателен",
                            "matches": "Пароль для транзакций должен состоять ровно из 6 цифр"
                        }
                    },
                    "confirmPassword": {
                        "label": "Подтвердите пароль для транзакций",
                        "placeholder": "Подтвердите пароль для транзакций",
                        "validation": {
                            "required": "Пожалуйста, подтвердите ваш пароль для транзакций",
                            "matches": "Пароли должны совпадать"
                        }
                    }
                },
                "buttons": {
                    "save": "Сохранить"
                },
                "alerts": {
                    "success": "Пароль для транзакций успешно установлен",
                    "error": "Произошла ошибка при установке пароля для транзакций"
                }
            },
            "lang": {
                "title": "Сменить язык"
            },
            "reels": {
                "missionAreaLabel": "Область миссий",
                "errors": {
                    "selectValidPackage": "Пожалуйста, выберите VIP-миссию",
                    "dailyLimitReached": "Лимит достигнут",
                    "notPurchased": "Пакет не найден",
                    "packageExpired": "Срок действия пакета истек",
                    "alreadyLiked": "Уже просмотрено"
                },
                "popup": {
                    "selectVipMission": {
                        "title": "Область VIP-миссий"
                    }
                }
            },
            "agentPromotion": {
                "title": "Система продвижения агентов",
                "teamSize": "Размер команды",
                "nextStageTeamSize": "Размер команды для следующего этапа",
                "nextStageGroupPromotionReward": "Награда за продвижение группы на следующий этап",
                "taskList": "Список задач",
                "firstGenInvite": "Пригласите члена первого уровня",
                "secondGenInvite": "Пригласите члена второго уровня",
                "thirdGenInvite": "Пригласите члена третьего уровня",
                "lastWeekIncrease": "Прирост за прошлую неделю",
                "thisWeekIncrease": "Прирост за эту неделю",
                "available": "Доступно",
                "receiveBtn": "Получить",
                "levels": {
                    "beginnerCreator": "Начинающий создатель",
                    "skilledSpecialist": "Квалифицированный специалист",
                    "seniorSpecialist": "Старший специалист",
                    "supervisor": "Руководитель",
                    "seniorSupervisor": "Старший руководитель",
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
                        "invalidAddress": "Адрес недействителен, пожалуйста, введите правильный адрес {{currency}}-{{network}}",
                        "singleAddressLimit": "Можно привязать только 1 адрес. Если вам нужно изменить его, пожалуйста, свяжитесь со службой поддержки",
                        "addressAlreadyExists": "Этот адрес уже существует, пожалуйста, не добавляйте его снова"
                    },
                    "successBound": "Адрес успешно привязан"
                },
                "pleaseSelectAddress": "Пожалуйста, выберите адрес",
                "deleteAddress": {
                    "errors": {
                        "usedAddress": "Этот адрес уже используется. Если вам нужно его изменить, пожалуйста, свяжитесь со службой поддержки."
                    }
                }
            },
            "modal": {
                "global": {
                    "warmRemainder": "Важное напоминание"
                },
                "content": {
                    "deleteAddress": {
                        "main": "Подтвердить удаление адреса"
                    }
                }
            },
            "watch": {
                "title": "YouTube",
                "cantDislike": "Дизлайк не разрешен",
                "subscribe": "Подписаться",
                "subscribed": "Подписан",
                "subscribing": "Подписка",
                "views": "просмотров",
                "explore": "Изучить"
            },
            "shortsRevenue": {
                "title": "Короткие видео"
            },
            "telegram": {
                "title": "Официальный Telegram",
                "joinGroup": "Присоединиться к группе Telegram",
                "claimReward": "Получить 4 USDT",
                "inputs": {
                    "username": {
                        "label": "Имя пользователя Telegram",
                        "placeholder": "Пожалуйста, введите ваше имя пользователя Telegram",
                        "validation": {
                            "required": "Имя пользователя Telegram обязательно"
                        }
                    }
                },
                "rewardInstructions": "Инструкции по вознаграждению за вступление в группу",
                "rewardInstruction1": "Чтобы подать заявку на вознаграждение за вступление в группу, пожалуйста, используйте ваше имя пользователя Telegram.",
                "rewardInstruction2": "Только новые аккаунты имеют право на получение вознаграждения. Аккаунты, которые уже получили его, не имеют права на вознаграждение за вступление в группу.",
                "rewardStatuses": {
                    "pendingReview": "Вы уже подали заявку. Пожалуйста, подождите, пока администратор отправит вознаграждение.",
                    "alreadyClaimed": "Вознаграждение уже получено.",
                    "pendingReviewGr": "Вознаграждение за вступление в группу ожидает проверки. Убедитесь, что вы присоединились к группе, пока администратор проверяет ваш запрос.",
                    "notInGroup": "Имя пользователя Telegram, которое вы ввели, не состоит в группе. Пожалуйста, подайте заявку снова. Убедитесь, что вы присоединились к группе и что ваше имя пользователя Telegram указано верно.",
                    "userNameUsed": "Имя пользователя Telegram уже используется. Свяжитесь со службой поддержки, если считаете, что это неверно."
                }
            },
            "missionsCenter": {
                "title": "Список задач",
                "direct": "Прямая задача",
                "team": "Командная задача",
                "growth": "Задача роста",
                "progress": "Прогресс",
                "added": "Количество для получения: <span class='text-[#eebc7a]'>{{count}}/{{total}}</span>",
                "alreadyClaimed": "Получено",
                "isClaiming": "Получение",
                "inProgress": "В процессе",
                "claimReward": "Получить",
                "addDirectActiveMembers": "Успешно пригласите {{count}} участников из вашего первого поколения, чтобы они подписались на любой VIP-пакет, и вы получите {{reward}} USDT",
                "addTeamMembers": "Получите {{reward}} USDT, когда подписки ваших второго и третьего поколений на VIP1 или выше достигнут в общей сложности {{count}} участников",
                "addGrowthMembers": "Добавьте всего {{count}} активных участников",
                "rewardClaimed": "Вознаграждение успешно получено",
                "claimFailed": "Не удалось получить вознаграждение"
            }
        }
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
