import React, { useState } from 'react';
import { 
  ArrowLeft,
  Upload, 
  BookOpen, 
  Users, 
  Clock, 
  Award,
  Image as ImageIcon,
  Video,
  FileText,
  CheckCircle,
  Save,
  Eye,
  Settings
} from 'lucide-react';

interface CreateCoursePageProps {
  onBack: () => void;
}

export default function CreateCoursePage({ onBack }: CreateCoursePageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: 'Beginner',
    duration: '',
    reward: '',
    image: '',
    learningObjectives: [''],
    prerequisites: [''],
    visibility: 'public'
  });
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const steps = [
    { id: 1, title: 'Basic Info', icon: BookOpen },
    { id: 2, title: 'Content', icon: Video },
    { id: 3, title: 'Settings', icon: Settings },
    { id: 4, title: 'Review', icon: CheckCircle }
  ];
  const categories = [
    'Programming',
    'Web Development',
    'Data Science',
    'Blockchain',
    'Mobile Development',
    'DevOps',
    'UI/UX Design',
    'Cybersecurity'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'learningObjectives' | 'prerequisites', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'learningObjectives' | 'prerequisites') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'learningObjectives' | 'prerequisites', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => {
                  handleInputChange('title', e.target.value);
                  setErrors(prev => ({...prev, title: ''}));
                }}
                placeholder="Enter your course title"
                className={`w-full px-4 py-3 border ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe what students will learn in this course"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                {isAddingCategory ? (
                  <input
                    type="text"
                    value={formData.category}
                    onChange={e => handleInputChange('category', e.target.value)}
                    placeholder="Enter new category"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <select
                    id="category-select"
                    value={formData.category}
                    onChange={(e) => {
                      if (e.target.value === '__add_new__') {
                        setIsAddingCategory(true);
                        handleInputChange('category', '');
                      } else {
                        handleInputChange('category', e.target.value);
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Select course category"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="__add_new__">Add new category...</option>
                  </select>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level *
                </label>
                <select
                  id="difficulty-select"
                  value={formData.difficulty}
                  onChange={(e) => handleInputChange('difficulty', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Select course difficulty level"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration *
                </label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  placeholder="e.g., 6 weeks"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  JSCoin Reward *
                </label>
                <input
                  type="number"
                  value={formData.reward}
                  onChange={(e) => handleInputChange('reward', e.target.value)}
                  placeholder="500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Thumbnail
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  id="thumbnail-upload"
                  className="hidden"
                  accept="image/png, image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.size > 2 * 1024 * 1024) {
                        setErrors(prev => ({...prev, image: 'File size must be less than 2MB'}));
                        return;
                      }
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        setFormData(prev => ({...prev, image: event.target?.result as string}));
                      };
                      reader.readAsDataURL(file);
                      setErrors(prev => ({...prev, image: ''}));
                    }
                  }}
                />
                <label htmlFor="thumbnail-upload" className="cursor-pointer">
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="Course thumbnail preview"
                      className="w-full h-48 object-cover mx-auto mb-4 rounded-lg"
                    />
                  ) : (
                    <>
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Upload course thumbnail</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 2MB</p>
                    </>
                  )}
                </label>
                <button
                  type="button"
                  onClick={() => document.getElementById('thumbnail-upload')?.click()}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Choose course thumbnail"
                >
                  Choose File
                </button>
                {errors.image && (
                  <p className="text-red-500 text-sm mt-2">{errors.image}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Learning Objectives
              </label>
              <p className="text-sm text-gray-500 mb-4">What will students achieve after completing this course?</p>
              {formData.learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-center space-x-2 mb-3">
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => handleArrayChange('learningObjectives', index, e.target.value)}
                    placeholder={`Learning objective ${index + 1}`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {formData.learningObjectives.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('learningObjectives', index)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove learning objective"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => addArrayItem('learningObjectives')}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                + Add Learning Objective
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prerequisites
              </label>
              <p className="text-sm text-gray-500 mb-4">What should students know before taking this course?</p>
              {formData.prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex items-center space-x-2 mb-3">
                  <input
                    type="text"
                    value={prerequisite}
                    onChange={(e) => handleArrayChange('prerequisites', index, e.target.value)}
                    placeholder={`Prerequisite ${index + 1}`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {formData.prerequisites.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('prerequisites', index)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove prerequisite"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => addArrayItem('prerequisites')}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                + Add Prerequisite
              </button>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Course Content Structure</h4>
              <p className="text-sm text-blue-700 mb-4">
                After creating your course, you'll be able to add modules, lessons, videos, and assignments.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3 rounded-lg">
                  <Video className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Video Lessons</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Assignments</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Quizzes</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Resources</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-medium text-yellow-900 mb-2">JSCoin Reward System</h4>
              <p className="text-sm text-yellow-700 mb-4">
                Students earn JSCoin tokens upon successful course completion. Higher rewards attract more students!
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-900">{formData.reward || '0'}</p>
                  <p className="text-xs text-yellow-700">JSC Reward</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-900">70%</p>
                  <p className="text-xs text-yellow-700">Your Share</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-900">30%</p>
                  <p className="text-xs text-yellow-700">Platform Fee</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Visibility
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    className="mr-3"
                    checked={formData.visibility === 'public'}
                    onChange={(e) => handleInputChange('visibility', e.target.value)}
                  />
                  <div>
                    <p className="font-medium">Public</p>
                    <p className="text-sm text-gray-500">Anyone can find and enroll in your course</p>
                  </div>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="visibility"
                    value="unlisted"
                    className="mr-3"
                    checked={formData.visibility === 'unlisted'}
                    onChange={(e) => handleInputChange('visibility', e.target.value)}
                  />
                  <div>
                    <p className="font-medium">Unlisted</p>
                    <p className="text-sm text-gray-500">Only people with the link can access</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enrollment Settings
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3"
                    defaultChecked
                    aria-label="Allow immediate enrollment"
                  />
                  <span>Allow immediate enrollment</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3"
                    aria-label="Require instructor approval"
                  />
                  <span>Require instructor approval</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-3"
                    aria-label="Set enrollment deadline"
                  />
                  <span>Set enrollment deadline</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-medium text-green-900 mb-4">Course Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Title:</p>
                  <p className="font-medium">{formData.title || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Category:</p>
                  <p className="font-medium">{formData.category || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Difficulty:</p>
                  <p className="font-medium">{formData.difficulty}</p>
                </div>
                <div>
                  <p className="text-gray-600">Duration:</p>
                  <p className="font-medium">{formData.duration || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-gray-600">JSCoin Reward:</p>
                  <p className="font-medium">{formData.reward || '0'} JSC</p>
                </div>
                <div>
                  <p className="text-gray-600">Learning Objectives:</p>
                  <p className="font-medium">{formData.learningObjectives.filter(obj => obj.trim()).length} objectives</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Next Steps</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Add course modules and lessons</li>
                <li>• Upload video content and materials</li>
                <li>• Create assignments and quizzes</li>
                <li>• Preview and publish your course</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Your course will be saved as a draft. You can continue editing and add content before publishing.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Save className="w-5 h-5" />
                <span>Save Draft</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Eye className="w-5 h-5" />
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {steps.find(s => s.id === currentStep)?.title}
            </h2>
            <p className="text-gray-600 mt-1">
              {currentStep === 1 && "Let's start with the basic information about your course"}
              {currentStep === 2 && "Define what students will learn and any prerequisites"}
              {currentStep === 3 && "Configure rewards and enrollment settings"}
              {currentStep === 4 && "Review your course details before creating"}
            </p>
          </div>

          {renderStepContent()}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <div className="flex space-x-3">
              <button
                onClick={onBack}
                className="px-6 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={() => {
                    const requiredFields: { [K in keyof typeof formData]?: string } = {
                      title: 'Course title is required',
                      description: 'Course description is required',
                      category: 'Category is required',
                      duration: 'Duration is required',
                      reward: 'Reward is required'
                    };
                    
                    const newErrors: Record<string, string> = {};
                    (Object.keys(requiredFields) as (keyof typeof formData)[]).forEach((field) => {
                      if (formData[field] === '') {
                        newErrors[field] = requiredFields[field]!;
                      }
                    });
                    
                    if (Object.keys(newErrors).length > 0) {
                      setErrors(newErrors);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => {
                    // Handle course creation
                    onBack();
                  }}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Create Course
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}