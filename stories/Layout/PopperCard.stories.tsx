import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { PopperCard } from '../../src/components/poppercard/PopperCard';
import { Button } from '../../src/components/button/Button';
import { AvatarButton } from '../../src/components/button/AvatarButton';
import ClickAwayListener from '../../src/components/common/ClickAwayListener';
import { FaBell as TogglerIcon } from 'react-icons/fa';

const meta: Meta = {
  title: 'Layout/PopperCard',
  component: PopperCard,
};

export default meta;

const ButtonPopperTemplate: Story = args => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative mx-auto">
        <Button
          size="md"
          text="Toast"
          color="primary"
          variant="normal"
          renderIcon={() => {
            return <TogglerIcon />;
          }}
          onClick={() => setOpen(!open)}
        />
        <PopperCard open={open} {...args}>
          <div className="flex flex-row items-center justify-center h-[200px]">
            <h1>Hello</h1>
          </div>
        </PopperCard>
      </div>
    </ClickAwayListener>
  );
};

/** */
export const ButtonPopper = ButtonPopperTemplate.bind({});
ButtonPopper.args = {
  height: 'auto',
  width: 200,
  position: 'left',
};

const AvatarPopperTemplate: Story = args => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative mx-auto">
        <AvatarButton
          onClick={() => setOpen(!open)}
          size="xs"
          ringColor="primary"
          active={open}
        />
        <PopperCard open={open} {...args}>
          <ul className="list-none">
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </ul>
        </PopperCard>
      </div>
    </ClickAwayListener>
  );
};
export const AvatarPopper = AvatarPopperTemplate.bind({});
AvatarPopper.args = {
  height: 'auto',
  width: 200,
  position: 'right',
};

const IconButtonPopperTemplate: Story = args => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="relative mx-auto">
        <Button
          size="md"
          color="ghost"
          variant="square"
          renderIcon={() => {
            return <TogglerIcon />;
          }}
          onClick={() => setOpen(!open)}
        />
        <PopperCard open={open} {...args}>
          <ul className="list-none">
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </ul>
        </PopperCard>
      </div>
    </ClickAwayListener>
  );
};

export const IconButtonPopper = IconButtonPopperTemplate.bind({});
IconButtonPopper.args = {
  height: 'auto',
  width: 200,
  position: 'right',
};
