import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import Icon from './Icon'

const propTypes = {
  altText: PropTypes.string,
  borderless: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf(['primary' | 'secondary' | 'link'])
}

const Button = ({
  altText,
  borderless,
  children,
  className,
  icon,
  onClick,
  theme,
  title,
  ...props }) => (
    <button className={cn('btn', className)} onClick={onClick} {...props}>
      {icon && <Icon title={altText} type={icon} />}
      {children || (icon && title && <span>{title}</span>)}
    </button>
  )

Button.propTypes = propTypes

export default Button
