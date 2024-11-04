import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';


const SignUpEmail = ({ navigation }) => {
    const [email, OnChangeEmail] = useState('');
    const [password, OnChangePassword] = useState('');

    const [jwt, setJwt] = useState(null);
    const [error, setError] = useState(null);

    const login = async () => {
        try {
            console.log("hooooooooo")
          const response = await axios.post('http://192.168.43.67:8081/api/v1/auth/login', {
            email: 'rusara.wimalasena123@gmail.com',
            password: 'password123',
          });
          console.log("aaaaaaaaaaaa")
    
          if (response.data.jwt) {
            setJwt(response.data.jwt);
            console.log("SUCESSSSSSSSSSSSS")
          } else {
            console.log(response);
          }
        } catch (err) {
          setError('Login failed: ' + err.message);
        }
      };

  return (
    <View className='flex-1 bg-white' >
      <Image className=' self-center mt-16'
            source={require('../../assets/png/logo.png')}
            resizeMode="contain"
        />

        <View className='items-center px-8 pt-24' >
            <Text className='text-xl font-bold text-center' >
                Enter your email address and password
            </Text>

            <TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-6 
                            text-base'
                value={email}
                onChangeText={OnChangeEmail}
                placeholder={'sample@domain.com'}
                keyboardType={'default'}
            />

            <TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            /><TextInput
                className='w-full bg-gray-100 border-2 border-gray-200 rounded-lg px-5 py-1.5 mt-4 
                            text-base'
                value={password}
                onChangeText={OnChangePassword}
                placeholder={'Enter Password'}
                keyboardType={'default'}
            />



            

            <View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View><View className='flex-row items-center mt-8' >
                <View className='flex-1 h-0.5 bg-gray-200 ' />
                <Text className='text-sm text-gray-500 mx-4' >
                    or continue with
                </Text>
                <View className='flex-1 h-0.5 bg-gray-200' />
            </View>

            

            <Text className='text-sm text-gray-500 text-center leading-5 mt-10'>
                By clicking continue, you agree to our <Text className='font-bold text-black'>Terms of Service and Privacy Policy</Text>
            </Text>

        </View>
    </View>
  )
}

export default SignUpEmail