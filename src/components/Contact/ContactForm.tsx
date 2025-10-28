import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PrimaryButton } from '../Button/PrimaryButton';
import { ContactFormData } from '../../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      console.log('Form data:', data);

      // In production, replace with actual form submission
      // const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      await new Promise(resolve => setTimeout(resolve, 1000));

      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="sr-only">
          Your Name
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          placeholder="Your Name"
          className={`
            form-input
            ${errors.name ? 'border-red-500' : ''}
          `}
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p className="mt-2 text-caption text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          placeholder="Your Email"
          className={`
            form-input
            ${errors.email ? 'border-red-500' : ''}
          `}
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="mt-2 text-caption text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="sr-only">
          Your Phone (Optional)
        </label>
        <input
          {...register('phone')}
          id="phone"
          type="tel"
          placeholder="Your Phone (Optional)"
          className="form-input"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          placeholder="Your Message"
          className={`
            form-input resize-none
            ${errors.message ? 'border-red-500' : ''}
          `}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="mt-2 text-caption text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <PrimaryButton type="submit" className="w-full md:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </PrimaryButton>
    </form>
  );
};
