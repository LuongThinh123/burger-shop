import request from '~/utils/request';

export const updateUserInfor = async (userInfor, accessToken) => {
  try {
    const result = await request.post(`/user/update`, userInfor, { headers: { token: `Bearer ${accessToken}` } });
    return result;
  } catch (err) {
    console.log(err);
  }
};
