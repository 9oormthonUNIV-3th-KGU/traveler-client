'use client'

import * as React from 'react'
import { Drawer as BottomSheetPrimitive } from 'vaul'

import { cn } from '~/utils/cn'

const BottomSheet = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof BottomSheetPrimitive.Root>) => (
  <BottomSheetPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
BottomSheet.displayName = 'BottomSheet'

const BottomSheetTrigger = BottomSheetPrimitive.Trigger

const BottomSheetPortal = BottomSheetPrimitive.Portal

const BottomSheetClose = BottomSheetPrimitive.Close

const BottomSheetOverlay = React.forwardRef<
  React.ElementRef<typeof BottomSheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof BottomSheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <BottomSheetPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/50', className)}
    {...props}
  />
))
BottomSheetOverlay.displayName = BottomSheetPrimitive.Overlay.displayName

const BottomSheetContent = React.forwardRef<
  React.ElementRef<typeof BottomSheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof BottomSheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <BottomSheetPortal>
    <BottomSheetOverlay />
    <BottomSheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mx-auto mt-24 flex h-auto max-w-screen-sm flex-col rounded-t border bg-white px-5 pt-9 shadow',
        className,
      )}
      {...props}
    >
      {children}
    </BottomSheetPrimitive.Content>
  </BottomSheetPortal>
))
BottomSheetContent.displayName = 'BottomSheetContent'

const BottomSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
)
BottomSheetHeader.displayName = 'BottomSheetHeader'

const BottomSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
)
BottomSheetFooter.displayName = 'BottomSheetFooter'

const BottomSheetTitle = React.forwardRef<
  React.ElementRef<typeof BottomSheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof BottomSheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <BottomSheetPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
BottomSheetTitle.displayName = BottomSheetPrimitive.Title.displayName

const BottomSheetDescription = React.forwardRef<
  React.ElementRef<typeof BottomSheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof BottomSheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <BottomSheetPrimitive.Description
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
))
BottomSheetDescription.displayName =
  BottomSheetPrimitive.Description.displayName

export {
  BottomSheet,
  BottomSheetPortal,
  BottomSheetOverlay,
  BottomSheetTrigger,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetDescription,
}
