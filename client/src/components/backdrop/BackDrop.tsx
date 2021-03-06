import React from 'react'
import './BackDrop.css'

export const BackDrop = (props: { drawerHandler: (closeDrawer: boolean) => void }): JSX.Element => {
	return <div onClick={() => props.drawerHandler(false)} className={'BackDrop'} />
}
