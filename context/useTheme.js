import {Text, View } from 'react-native'
import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export const useTheme = () => {
  return useContext(ThemeContext)
 }

