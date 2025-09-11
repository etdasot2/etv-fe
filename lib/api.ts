import axios from 'axios';
import { getToken } from '@/lib/auth'; // Import the getToken function to retrieve JWT

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const getBaseUrl = () => {
    // Check if we're in development environment
    const isDevelopment = process.env.NODE_ENV === 'development';

    return isDevelopment
        ? 'http://localhost:5003/api'
        : 'https://Eternova Films-be-eight.vercel.app/api';
};

export const apiClient = axios.create({
    baseURL: getBaseUrl(),
    timeout: 60000,
});

interface LoginData {
    identifier: string;
    password: string;
    loginType: 'username' | 'email';
}

export async function loginUser(data: LoginData) {
    const { identifier, password, loginType } = data;

    try {
        const payload = {
            identifier, // Username or Email (based on loginType)
            password,
            loginType, // Pass the login type so the backend can handle it accordingly
        };

        const response = await apiClient.post('/users/login', payload);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Extract and throw the error response or a default error message
            throw error.response?.data || { message: 'An error occurred' };
        } else {
            throw { message: 'An unknown error occurred' };
        }
    }
}

export async function registerUser(data: {
    username: string;
    email: string;
    phoneNumber: string;
    phonePrefix: string;
    password: string;
    referral?: string;
}) {
    try {
        const response = await apiClient.post('/users/register', data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response?.data || { message: 'An error occurred' };
        } else {
            throw { message: 'An unknown error occurred' };
        }
    }
}

export const getProfileDetails = async () => {
    const token = getToken(); // Retrieve token from local storage or context

    const response = await apiClient.get('/users/profile-details', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const checkBalance = async () => {
    const token = getToken(); // Retrieve token from local storage or context

    const response = await apiClient.get('/payments/check-status-b', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const getWalletDetails = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/users/wallet-details', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const generatePaymentAddress = async (data: { amount: number }) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/payments/generate-address', data, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error generating payment address');
    }
};

export const fetchTransactionDetails = async (sn: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/payments/transaction-init-details?sn=${sn}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching transaction details');
    }
};

export const fetchTransactions = async (page: number, limit: number, category?: string, year?: string, month?: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/users/get-transactions', {
            headers: { Authorization: `Bearer ${token}` },
            params: {
                page,
                limit,
                category: category !== 'all' ? category : undefined,
                year: year || undefined, // Add year to params
                month: month || undefined, // Add month to params
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching transactions');
    }
};


export const fetchAccelerators = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/accelerators', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the accelerators data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching accelerators');
    }
};


export const fetchUserBalance = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/users/get-user-balance', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};


export const fetchPowerItems = async (acceleratorId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/poweritems/${acceleratorId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the power items data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching power items');
    }
};

export const buyPowerItem = async (powerItemId: string, quantity: number) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/global/poweritems-buy', { powerItemId, quantity }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the success or failure message
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error buying power item');
    }
};

export const fetchMyTasks = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/my-tasks', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the tasks data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching tasks');
    }
};


export const productDetailsGet = async (productId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/product-details-get?id=${productId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the product details
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching product details');
    }
};

export const startTask = async (taskId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/global/start-task', { taskId }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error starting task');
    }
};


export const claimEarnings = async (taskOrderId: string) => {
    const token = getToken(); // Function to get JWT token
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/global/claim-earnings', { taskOrderId }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error claiming earnings');
    }
};


export const updateTaskStatus = async (taskId: string) => {
    const token = getToken(); // Function to get JWT token
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/global/update-task-status', { taskId }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error updating task order');
    }
};


export const fetchYieldStatistics = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/yield-statistic`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the product details
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching product details');
    }
};

export const fetchDailyYield = async () => {
    const token = getToken(); // Ensure you have a function to get JWT
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/yield-daily', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching daily yield');
    }
};

export const transferFunds = async (amount: number) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/global/transfer-funds', { amount }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the response data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error transferring funds');
    }
};

export const fetchTransferTransactions = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/users/get-transfer-transactions', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return transactions
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching transfer transactions');
    }
};

export const getWithdrawalDetails = async (withdrawalId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/withdrawal/${withdrawalId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching withdrawal details');
    }
};

export const confirmWithdrawal = async (withdrawalId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post(`/global/withdrawal-confirm`, {
            withdrawalId,
        }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error confirming withdrawal');
    }
};


export const fetchOrdersList = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');
    try {
        const response = await apiClient.get('/global/get-orders-list', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching orders');
    }
};

export const getOrderDetails = async (orderId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/get-order-details?orderId=${orderId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching order details');
    }
};

export const checkUnreadNotifications = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/check-unread-notifications', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the hasUnread flag
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error checking unread notifications');
    }
};

export const checkUnreadNotificationsByType = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/check-unread-types', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data; // Return the unread counts
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error checking unread notifications');
    }
};

export const getNotifications = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/get-all-notifications', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching notifications');
    }
};

export const getNotificationDetails = async (id: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/notification-detail/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching notification details');
    }
};

export const getTeamData = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/my-team-data', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching team data');
    }
};

export const getGlobalRecords = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/get-global-records', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.records; // Assuming your API returns records in this format
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching team data');
    }
};

export const getWithdrawalsList = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/withdrawals-list', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.withdrawals;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching withdrawals');
    }
};

export const syncDgptDataToPro = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/login/sync-data', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const syncProfit = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/login/sync-profit', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const syncProgress = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/login/sync-progress', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const syncInivtationDetails = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/login/sync-invitation-details', {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const checkSyncRequest = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/users/check-sync', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const syncDataRequest = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.post(
        '/users/sync-data-request',
        {},
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
    return response.data;
};

// export const fetchPackages = async () => {
//     const token = getToken();
//     if (!token) throw new Error('No token found');

//     const response = await apiClient.get('/global/packages', {
//         headers: { Authorization: `Bearer ${token}` },
//     });

//     return response.data;
// };

export const purchasePackage = async (packageId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.post(
        '/global/purchase-package',
        { packageId },
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
    return response.data;
};

export const fetchPackagesAndPurchased = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/packages', {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data; // The response will contain both 'allPackages' and 'purchasedPackages'
};

export const fetchRandomReels = async (limit: number = 6, excludeIds: string[] = []) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/get-random-reels', {
            headers: { Authorization: `Bearer ${token}` },
            params: {
                limit,
                excludeIds: JSON.stringify(excludeIds.filter(Boolean))
            },
        });

        return response.data;
    } catch (error: any) {
        console.error('Error fetching random reels:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch reels');
    }
};


export const fetchVipPackage = async (packageId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    // Include packageId in the API request URL
    const response = await apiClient.get(`/global/get-vip-package/${packageId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

export const likeReel = async (reelId: string, packageId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post(
            '/global/like-reel',
            { reelId, packageId }, // Include packageId in the request body
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
    
        return response.data;
    } catch (error: any) {
        // Ensure you are extracting the message properly
        throw error.response?.data?.message || 'An error occurred';
    }
   
};

export const fetchUserPackagesAndLikes = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/get-user-packages', {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

export const fetchPackagesAndLikes = async () => {
    const token = getToken(); // Assuming getToken is a function that retrieves the JWT token
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/get-packages-and-likes', {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};


export const fetchLikedReels = async (skip: number, limit: number) => {
    const token = getToken(); // Assuming getToken is a function that retrieves the JWT token
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/liked-reels', {
        headers: { Authorization: `Bearer ${token}` },
        params: { skip, limit }, // Pagination params
    });

    return response.data;
};

export const fetchRevenueStats = async () => {
    const token = getToken(); // Assuming getToken is a function that retrieves the JWT token
    if (!token) throw new Error("No token found");

    const response = await apiClient.get("/global/revenue-stats", {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

export const fetchPopularReels = async () => {
    const token = getToken(); // Function to get JWT token
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/popular-reels', {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

export const sendVerificationCode = async (): Promise<any> => {
    const token = getToken(); // Assuming you have a function to get JWT token
    if (!token) throw new Error('No token found');

    const response = await apiClient.post('/users/send-verification-code', {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const changePassword = async (data: { verificationCode: string; newPassword: string }): Promise<any> => {
    const token = getToken(); // Assuming you have a function to get JWT token
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/users/change-password', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error: any) {
        // Ensure you are extracting the message properly
        throw error.response?.data?.message || 'An error occurred';
    }
};

export const getUserDetails = async () => {
    const token = getToken(); // Assume getToken is a utility function that retrieves JWT token
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/get-user-details', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const changeFundsPassword = async (data: { verificationCode: string, newFundsPassword: string, isBind: boolean }) => {
    const token = getToken(); // Function to get JWT token
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/users/change-funds-password', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // Return response data if successful
    } catch (error: any) {
        // Properly handle and throw the error message
        throw error.response?.data?.message || 'An error occurred while changing funds password';
    }
};

export const sendResetPasswordCode = async (email: string): Promise<any> => {
    try {
        const response = await apiClient.post(
            '/users/reset-password-send-code', // Reset password endpoint
            { email }
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'Failed to send reset password code';
    }
};

export const resetPassword = async (data: { email: string, verificationCode: string, newPassword: string }): Promise<any> => {
    try {
        const response = await apiClient.post(
            '/users/reset-password', data
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'Failed to send reset password code';
    }
};

export const getReferralChain = async () => {
    const token = getToken(); // Retrieve token from local storage or context

    const response = await apiClient.get('/global/referral-chain', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const initiateBuyPackage = async (packageId: string) => {
    const token = getToken(); // Retrieve JWT token

    try {
        const response = await apiClient.post('/global/initiate-buy-package', {
            packageId: packageId,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // Return the data, which includes initiateId
    } catch (error: any) {
        throw error.response ? error.response.data.message : 'An error occurred';
    }
};

export const placeOrder = async (packageId: string, hash: string) => {
    const token = getToken(); // Get JWT from local storage or context

    try {
        const response = await apiClient.post(
            '/global/place-order',
            { packageId, hash },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'An error occurred';
    }
};

export const cancelWithdrawal = async (withdrawalId: string) => {
    const token = getToken(); // Get JWT from local storage or context

    try {
        const response = await apiClient.post(
            '/global/cancel-withdrawal',
            { withdrawalId },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'An error occurred';
    }
};

// export const placeOrder = async (isn: string | null, fundsPassword: string) => {
//     const token = getToken(); // Get JWT from local storage or context

//     try {
//         const response = await apiClient.post(
//             '/global/place-order',
//             { isn, fundsPassword },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );

//         return response.data;
//     } catch (error: any) {
//         throw error.response?.data?.message || 'An error occurred';
//     }
// };

// export const placeOrder = async (isn: string | null, fundsPassword: string) => {
//     const token = getToken(); // Get JWT from local storage or context

//     try {
//         const response = await apiClient.post(
//             '/global/place-order',
//             { isn, fundsPassword },
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );

//         return response.data;
//     } catch (error: any) {
//         throw error.response?.data?.message || 'An error occurred';
//     }
// };

export const checkFundsPassword = async () => {
    const token = getToken(); // Get JWT from local storage or context

    try {
        const response = await apiClient.get('/users/check-funds-password', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // Return the result from the backend (either 'no_funds_password' or true)
    } catch (error: any) {
        throw error.response?.data?.message || 'An error occurred';
    }
};

export const setFundsPassword = async (fundsPassword: string) => {
    const token = getToken(); // Get JWT from local storage or context

    try {
        const response = await apiClient.post(
            '/users/set-funds-password',
            { fundsPassword }, // Send the new funds password to the backend
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data; // Return the result from the backend
    } catch (error: any) {
        throw error.response?.data?.message || 'An error occurred';
    }
};

export const initiateWithdrawal = async (amount: number, address: string, amountWithFees: number, hash: string): Promise<any> => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    try {
        const response = await apiClient.post(
            '/global/initiate-withdrawal',
            { amount, address, amountWithFees, hash },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data; // Return the response including the isn
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to initiate withdrawal');
    }
};

export const requestWithdrawal = async (isn: string | null, fundsPassword: string): Promise<any> => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    try {
        const response = await apiClient.post(
            '/global/request-withdrawal',
            { isn, fundsPassword }, // Pass the isn and fundsPassword to the backend
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Pass the JWT token in the Authorization header
                },
            }
        );

        return response.data; // Return the response data (e.g., success message)
    } catch (error: any) {
        throw error.response ? error.response.data.message : 'An error occurred';
    }
};

export const fetchUserProfile = async (): Promise<any> => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    try {
        const response = await apiClient.get('/users/user-profile-all-details', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // The user profile details
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch user profile');
    }
};

export const updateUserProfile = async (data: {
    nickname?: string;
    telegram?: string;
    whatsapp?: string;
    gender?: string;
}): Promise<any> => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    try {
        const response = await apiClient.put(
            '/users/update-profile', // Update profile endpoint
            data, // Data to update
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
};

export const submitKYCForReview = async (
    kycData: any,
    frontImage: File,
    backImage: File | null,
    selfieImage: File
  ) => {
    try {
      const token = getToken();
      if (!token) throw new Error('Unauthorized');
  
      // Upload files directly through FormData
      const uploadFile = async (file: File, type: string) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
  
        const response = await apiClient.post('/global/upload-to-s3', formData);
        return response.data.url;
      };
  
      const [frontImageUrl, backImageUrl, selfieImageUrl] = await Promise.all([
        uploadFile(frontImage, 'frontImage'),
        backImage ? uploadFile(backImage, 'backImage') : Promise.resolve(null),
        uploadFile(selfieImage, 'selfieImage')
      ]);
  
      const response = await apiClient.post(
        '/users/submit-kyc-review',
        {
          ...kycData,
          frontImage: frontImageUrl,
          backImage: backImageUrl,
          selfieImage: selfieImageUrl
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      return response.data;
    } catch (error: any) {
      console.error('KYC submission error:', error);
      throw error.response?.data?.message || 'Failed to submit KYC';
    }
  };
  


// Helper function to upload files to S3
const uploadFileToS3 = async (file: File, type: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const response = await apiClient.post('/global/upload-to-s3', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    console.log(response.data.url)
    return response.data.url; // Return the URL of the uploaded file
};


export const checkKYCSubmission = async () => {
    const token = getToken(); // Get the JWT token from your storage/context
    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get('/users/check-kyc-submission', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
};

export const checkUserNotifications = async () => {
    const token = getToken(); // Get the JWT token from your storage/context
    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get('/global/check-notifications', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const checkNotificationsByType = async (type: string) => {
    const token = getToken(); // Assume you have a function that retrieves the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get(`/global/notifications-with-type?type=${type}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const fetchNotificationById = async (id: string) => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get(`/global/notification-details?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const fetchTeamStats = async () => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get('/global/team-get-user-stats-all', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// export const fetchTeamMembers = async (page: number, limit: number, generation: string) => {
//     const token = getToken();

//     if (!token) {
//         throw new Error('Unauthorized: No token found');
//     }

//     const response = await apiClient.get('/global/my-team-list', {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//         params: {
//             page,
//             limit,
//             generation,
//         },
//     });

//     return response.data;
// };


// export const fetchTeamMembers = async () => {
//     const token = getToken(); // Get the JWT token

//     if (!token) {
//         throw new Error('Unauthorized: No token found');
//     }

//     const response = await apiClient.get('/global/my-team-list', {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });

//     return response.data;
// };

export const fetchTeamMembers = async (generation: number, page = 1, limit = 10) => {
    const token = getToken()
  
    if (!token) {
      throw new Error("Unauthorized: No token found")
    }
  
    const response = await apiClient.get("/global/my-team-list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        generation: generation, // Pass the generation as a query parameter
        page: page,
        limit: limit,
      },
    })
  
    return response.data
  }


  


export const fetchTutorials = async () => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get('/global/tutorials-list', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.tutorials;
};


export const fetchNotices = async () => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get('/global/notices-list', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.tutorials;
};


export const fetchTutorialById = async (id: string) => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get(`/global/tutorial-details?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};


export const fetchNoticeById = async (id: string) => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get(`/global/notice-details?id=${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const fetchUnreadNotificationsCount = async () => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get('/global/check-unread-notifications', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.unreadCount;
};

export const checkBannerStatus = async () => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.get('/users/banner-seen-status', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const getTasksByType = async (type: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get(`/global/tasks?type=${type}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// New function for claiming tasks
export const claimTask = async (taskId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.post('/global/claim-task',
        { taskId },
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    );
    return response.data;
};

export const getOrCreateDepositAddress = async () => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.post('/payments/generate-address', {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data; // Should contain the deposit address details
};

export const setDefaultLanguage = async (languageCode: string) => {
    const token = getToken();

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    const response = await apiClient.post(
        '/users/set-default-language',
        { languageCode },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export const setUserLocation = async (defaultLanguage?: string) => {
    const token = getToken(); // Get the JWT token

    if (!token) {
        throw new Error("Unauthorized: No token found");
    }

    // Prepare the request payload
    const data = defaultLanguage ? { defaultLanguage } : {};

    const response = await apiClient.post(
        "/users/set-location",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

interface FriendsStats {
    totalFriends: number;
    activeFriends: number;
    totalIncome: number;
    todayIncome: number;
    activeFriendsLevels: any;
}

export const getFriendsStats = async (generation?: string) => {
    const token = getToken();

    const response = await apiClient.get<FriendsStats>('/global/friends-stats', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            generation: generation
        }
    });

    return response.data;
};

export const bindAddress = async (data: {
    rechargeChannel: string;
    mainnet: string;
    address: string;
}) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.post('/global/bind-address', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'Failed to bind address';
    }
};

export const getUserAddresses = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get('/global/user-addresses', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data.addresses;
    } catch (error: any) {
        throw error.response?.data?.message || 'Failed to fetch addresses';
    }
};

export const deleteAddress = async (addressId: string) => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.delete(`/global/delete-address/${addressId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'Failed to delete address';
    }
};


export const selectAddress = async (addressId: string) => {
    const token = getToken();
    if (!token) throw new Error('Unauthorized: No token found');

    try {
        // Using query params here (since GET requests typically don't have bodies)
        const response = await apiClient.get('/global/select-addresses', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                addressId,
            },
        });
        return response.data; // Expecting data.address (or similar) in response
    } catch (error: any) {
        // error.response?.data?.message should contain 'unathoruziedAddress' if not authorized.
        throw error.response?.data?.message || 'Failed to select address';
    }
};

export const verifyFundsPassword = async (fundsPassword: string) => {
    const token = getToken()
    if (!token) throw new Error("No token found")

    try {
        const response = await apiClient.post(
            "/users/verify-funds-password-popup",
            { fundsPassword },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return response.data
    } catch (error: any) {
        throw error.response?.data?.message || "Failed to verify funds password"
    }
}


interface TrendingParams {
    category?: string
    page?: number
    limit?: number
    search?: string
    videoId?: string;
  }
  

export const fetchHomeTrending = async (params: TrendingParams = {}) => {
    const token = getToken()
  
    if (!token) {
      throw new Error("Unauthorized: No token found")
    }
  
    const { category, page = 1, limit = 6, search = "", videoId } = params
  
    try {
      const response = await apiClient.get("/global/trending", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          contentType: "yt-video",
          category: category !== "all" ? category : undefined,
          page,
          limit,
          search: search.trim(),
          videoId: videoId ? videoId : undefined
        },
      })
  
      return response.data
    } catch (error: any) {
      throw error.response?.data?.message || "Failed to fetch trending videos"
    }
  }


export const fetchHomeYT = async (pageNumber: number) => {
    const token = getToken();

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    try {
        const response = await apiClient.get(`/global/home-yt?page=${pageNumber}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || `Failed to fetch video details for video ID: `;
    }
};
 
  
export const fetchVideoDetails = async (videoId: string) => {
    const token = getToken();

    if (!token) {
        throw new Error('Unauthorized: No token found');
    }

    try {
        const response = await apiClient.get(`/global/videos/${videoId}`, { // Use a specific endpoint for single video details
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || `Failed to fetch video details for video ID: ${videoId}`;
    }
};

export const fetchPackagesAndPurchasedShorts = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/packages-shorts', {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data; // The response will contain both 'allPackages' and 'purchasedPackages'
};

export const fetchRevenueStatsShorts = async () => {
    const token = getToken(); // Assuming getToken is a function that retrieves the JWT token
    if (!token) throw new Error("No token found");

    const response = await apiClient.get("/global/revenue-stats-shorts", {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

export const fetchPackagesAndLikesShorts = async () => {
    const token = getToken(); // Assuming getToken is a function that retrieves the JWT token
    if (!token) throw new Error('No token found');

    const response = await apiClient.get('/global/get-packages-and-likes-shorts', {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};


export const agentCheck = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/agent-check`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching transaction details');
    }
};

export const agentPromotionOverview = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/agent-promotion-overview`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching transaction details');
    }
};

export const agentPromotionSalary = async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');

    try {
        const response = await apiClient.get(`/global/agent-promotion-salary`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching transaction details');
    }
};


export const agentClaimSalary = async (generation: string) => {
    try {
        const token = getToken(); // Get the JWT token
        if (!token) {
            throw new Error('Unauthorized: No token found');
        }

        const response = await apiClient.post(
            '/global/agent-claim-salary',
            {generation},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error submitting KYC for review:', error);
        throw new Error('Failed to submit KYC for review');
    }
};


export const telegramReward = async (telegramUsername: string) => {
    const token = getToken();
  
    if (!token) {
      throw new Error("Unauthorized: No token found");
    }
  
    const response = await apiClient.post(
      "/global/group-entry-reward-apply",
      { telegramUsername },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return response.data;
  };

  export const checkTelegramRewardStatus = async () => {
    const token = getToken();
  
    if (!token) {   
      throw new Error("Unauthorized: No token found");
    }
  
    const response = await apiClient.get("/global/group-entry-reward-check-status", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  };