import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './button'


const buttonMeta:ComponentMeta<typeof Button> = {
  title:'Button',
  component: Button,
}
export default buttonMeta;

export const Default : ComponentStory<typeof Button> = () =>(
  <Button> Default Button</Button>
);

Default.storyName='默认按钮样式';

export const ButtonWithSize:ComponentStory<typeof Button> = () =>( //这里箭头函数格式必须正确，否则报错？？？
 <>
   <Button size="lg">Primary Button</Button>
   <Button size="sm">Small Button</Button>
   <Button btnType='link' href='https://www.baidu.com'>Link Button</Button>
   
 </>
)
ButtonWithSize.storyName='不同尺寸的按钮'
