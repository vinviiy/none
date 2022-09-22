import React,{CSSProperties,ReactNode,useContext} from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?:ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const context=useContext(MenuContext) //context 里有需要传的index和当前index
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active':context.index ===index
  })
  const handleClick=()=>{
    if(context.onSelected && !disabled && (typeof index ==='string')){
        context.onSelected(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
MenuItem.displayName='MenuItem'
export default MenuItem